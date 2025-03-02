import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EditorInstance } from "../../components/Editor";
import { LeftSide } from "../../components/LeftSide";
import { CodeExecution } from "../../components/CodeExecution";
import { axiosInstance } from "../../Helper/axios";
import defaultLang from "../../Helper/default";

type ProblemDetail = {
  name: string;
  description: string;
  difficulty: string;
  Topics: string[];
  testCases: string[];
  Constraints: string[];
};

interface AllProbs {
  javascript: string;
  python: string;
  java: string;
  cpp: string;
}

function ProblemDetail() {
  const { id } = useParams();
  const [problemDetail, setProblemDetail] = useState<ProblemDetail | null>(null);
  const [language, setLanguage] = useState<"cpp" | "java" | "python" | "javascript">("cpp");
  const [showExecution, setShowExecution] = useState(false);
  const [runFetching, setRunFetching] = useState<boolean>(false);
  const [userInputLang, setUserInputLang] = useState<AllProbs>(defaultLang);

  useEffect(() => {
    const getProblemDetail = async () => {
      try {
        const res = await axiosInstance.get(`/${id}`);
        setProblemDetail(res.data.code);
      } catch (error) {
        console.error("Error fetching problem details:", error);
      }
    };

    getProblemDetail();
  }, [id]);


  useEffect(() => {
    runFetching && setShowExecution(true);
  }, [runFetching]);

  if (!problemDetail) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const handleCodeChange = (newCode: AllProbs) => {
    setUserInputLang(newCode);
  };

  const handleRunCode = () => {
    console.log("Running Code for Language:", language);
    setRunFetching(true);
  };
  
  return (
    <div className="flex h-screen mt-10">
      <div className="w-1/2 p-6 bg-white border-r border-gray-300">
        <LeftSide problemDetail={problemDetail} />
      </div>
      <div className="w-1/2 p-6 text-white">
        <div className="mb-4 flex items-center gap-2">
          <div>
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

          <button
            onClick={handleRunCode}
            className="mt-6 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
          >
            Run
          </button>
        </div>

        <EditorInstance langage={language} value={userInputLang[language]} changeValue={handleCodeChange} />


        {showExecution && (
          <CodeExecution
            value={userInputLang[language]}
            language={language}
            setRunFetching={setRunFetching}
            testCases={problemDetail.testCases.map((i:string)=>JSON.parse(i))}
            setShowExecution={setShowExecution}
          />
        )}
      </div>
    </div>
  );
}

export default ProblemDetail;
