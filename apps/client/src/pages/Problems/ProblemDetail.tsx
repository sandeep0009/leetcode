import { useEffect, useState } from "react";
import { EditorInstance } from "../../components/Editor";
import { LeftSide } from "../../components/LeftSide";
import { CodeExecution } from "../../components/CodeExecution";

function ProblemDetail() {
  const [language, setLanguage] = useState<"cpp" | "java" | "python" | "javascript">("cpp");
  const [showExecution, setShowExecution] = useState(false);
  const [runFetching, setRunFetching] = useState<boolean>(false);
  useEffect(() => {
    runFetching && setShowExecution(true);
  }, [runFetching]);
  

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-6 bg-white border-r border-gray-300">
        <LeftSide />
      </div>
      <div className="w-1/2 p-6 text-white">
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-300">
            Select Language:
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value as "cpp" | "java" | "python" | "javascript")}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-800 text-white rounded"
          >
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
          </select>
        </div>
        <EditorInstance  langage={language} />

        {showExecution && (
          <CodeExecution
            value={userInputLang[language]}
            language={language}
            setRunFetching={setRunFetching}
            testCases={details.testCases.map((i:string)=>JSON.parse(i))}
            setShowExecution={setShowExecution}
          />
        )}
      </div>
    </div>
  );
}

export default ProblemDetail;
