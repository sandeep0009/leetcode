import {CodeType} from'@repo/types-common/types';
import { suppportedLanguageVersion } from './config';


type language="javascript" | "python" | "java";

export const executeCode=async(obj: Pick<CodeType, "code" | "language">)=>{
    const lang=obj.language as language;
    const langVersion=suppportedLanguageVersion;

    if(!langVersion[`${lang}`]){
        throw new Error("Langauge not supported");
    }

    const version=langVersion[`${lang}`];
    const res:any=await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: obj.language,
          version,
          files: [
            {
              content: obj.code,
            },
          ],
        }),
      });
      const data=await res.json();
      if (data.run.code !== 0) {
        return {
          status: "error",
          message: data.run.stderr,
        };
      }
    
      return {
        status: "success",
        message: data.run.stdout,
      };
};

