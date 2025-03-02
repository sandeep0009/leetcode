import { useEffect, useState } from "react";
import { axiosInstance } from "../../Helper/axios";
import { useNavigate } from "react-router-dom";

interface Problem {
  id: string;
  name: string;
  difficulty: string;
}

function Problems() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const router=useNavigate();

  const getProblems = async () => {
    try {
      const response = await axiosInstance.get("/"); 
      setProblems(response.data.codes);
    } catch (error) {
      console.error("Failed to fetch problems", error);
    }
  };

  const handleProblemById=(id:string)=>{
    router(`/problem/${id}`);
  }
  useEffect(() => {
    getProblems();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Problems List</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-primary-600 text-white">
              <th className="border p-3">S.No</th>
              <th className="border p-3">Title</th>
              <th className="border p-3">Difficulty</th>
              <th className="border p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {problems?.map((problem, index) => (
              <tr key={problem.id} className="text-center hover:bg-gray-100">
                <td className="border p-3">{index + 1}</td>
                <td className="border p-3 font-medium">{problem.name}</td>
                <td
                  className={`border p-3 font-bold ${
                    problem.difficulty === "Easy"
                      ? "text-green-500"
                      : problem.difficulty === "Medium"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {problem.difficulty}
                </td>
                <td className="border p-3">
                  <button onClick={()=>handleProblemById(problem.id)} className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
                    Try to Solve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Problems;
