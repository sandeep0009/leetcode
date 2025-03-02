type ProblemDetailProps = {
    problemDetail: {
        name: string;
        description: string;
        difficulty: string;
        Topics: string[];
        testCases: string[];
        Constraints: string[];
    };
};

export const LeftSide = ({ problemDetail }: ProblemDetailProps) => {
    const handleColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "text-green-500";
            case "Medium":
                return "text-yellow-500";
            case "Hard":
                return "text-red-500";
            default:
                return "text-gray-500";
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h1 className="text-2xl font-bold">{problemDetail.name}</h1>
                <span className={`px-3 py-1 text-sm font-medium rounded ${handleColor(problemDetail.difficulty)}`}>
                    {problemDetail.difficulty}
                </span>
            </div>
            <p className="text-gray-700 mb-4">{problemDetail.description}</p>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-primary-700">Topics</h3>
                <div className="flex flex-wrap gap-2">
                    {problemDetail.Topics?.map((topic, index) => (
                        <span key={index} className="bg-primary-700 text-white px-3 py-1 rounded-md text-sm">
                            {topic}
                        </span>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-700">Constraints</h3>
                <ul className="list-disc list-inside bg-gray-100 p-4 rounded-md">
                    {problemDetail.Constraints?.map((constraint, index) => (
                        <li key={index} className="text-gray-800">{constraint}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-700">Test Cases</h3>
                <ul className="list-disc list-inside bg-gray-100 p-4 rounded-md">
                    {
                        problemDetail?.testCases?.map((test, index) => {
                            let parsedTestCase;
                            try {
                                parsedTestCase = JSON.parse(test);
                            } catch (error) {
                                console.error("Failed to parse test case", error);

                            }
                            return (
                                <li key={index} className="text-gray-800">
                                    <strong>Input:</strong> {parsedTestCase?.dispInput || parsedTestCase?.input}
                                    <br />
                                    <strong>Expected Output:</strong> {parsedTestCase?.dispOutput || parsedTestCase?.output}
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};
