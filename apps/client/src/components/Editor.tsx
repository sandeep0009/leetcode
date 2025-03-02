import { Editor } from "@monaco-editor/react";



type EditorInstanceProps={
    langage:string
}

export const EditorInstance=({langage}:EditorInstanceProps)=>{

    return(

        <Editor
        height="90vh"
        defaultLanguage={langage}
        defaultValue="// some comment"
        theme="vs-dark"
      />

    )
}