import { CodeType, codeSubmitSchema } from '@repo/types-common/types';
import { createClient } from "redis";
import { executeCode } from './utils';

const client = createClient({
  socket: {
    host: "localhost",
    port: 6379
  }
});

async function processSubmission(submission: string) {
  try {
    console.log("Processing submission:", submission);
    const parsedSubmission = JSON.parse(submission);
    console.log("Parsed submission:", parsedSubmission);

    const obj: CodeType = codeSubmitSchema.parse(parsedSubmission);
    console.log("Validated submission:", obj);

    const result = await executeCode({
      code: obj.code,
      language: obj.language,
    });

    console.log("Execution result:", result);

    const customOutput = {
      status: result.status,
      message: result.message,
    };

    console.log("Pushing result to solutions queue:", JSON.stringify({ output: customOutput, problemId: obj.problemId }));
    await client.lPush(
      `solutions`,
      JSON.stringify({ output: customOutput, problemId: obj.problemId })
    );
    console.log("Successfully pushed to solutions queue");

    return result;
  } catch (error) {
    console.error("Error processing submission:", error);
  }
}

async function startWorker() {
  try {
    await client.connect();
    console.log("Worker connected to Redis.");
    while (true) {
      try {
        console.log("Waiting for submissions...");
        const submission = await client.brPop("problems", 0);
        if (!submission) {
          console.log("No submission found, continuing...");
          continue;
        }
        console.log("Received submission:", submission);
        await processSubmission(submission.element);
      } catch (error) {
        console.error("Error processing submission:", error);
      }
    }
  } catch (error) {
    console.error("Failed to connect to Redis", error);
  }
}
startWorker();