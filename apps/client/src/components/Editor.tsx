import { Editor } from "@monaco-editor/react";
import { AllProbs } from "../Helper/allProblem";

type EditorInstanceProps = {
  langage: string;
  changeValue?: (_: AllProbs) => void;
  value: AllProbs;
};

export const EditorInstance = ({ langage, changeValue, value }: EditorInstanceProps) => {
  const handleChangeValue = (val?: string) => {
    if (!changeValue || val === undefined) return;
    
    const newState = { ...value, [langage]: val };
    changeValue(newState);
    localStorage.setItem("editorState", JSON.stringify(newState));
  };

  return (
    <Editor
      height="90vh"
      defaultLanguage={langage}
      value={value[langage]}  
      onChange={handleChangeValue} 
      theme="vs-dark"
    />
  );
};
