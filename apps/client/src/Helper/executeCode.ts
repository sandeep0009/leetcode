import { axiosInstance } from "./axios";


export const executeCode=async(
    code:string,
    langauge:string,
    testCase:any,
    problemId:string

)=>{
    const replace:{[key:string]:any}=testCase;
    let newCode=code;
    Object.keys(replace).forEach((key)=>{
        newCode=newCode.replace(new RegExp(`{{{${key}}}}`, "g"), replace[key]);
    });
    newCode = newCode.replace(/\\n/g, " ");
    try {
 await axiosInstance.post('/submit', {
            code: newCode,
            language: langauge === "cpp" ? "c++" : langauge,
            problemId
          });


        try {
            const res=await axiosInstance.get(`/check-problem/${problemId}`);
            console.log("rest",res)
            return res.data;
            
        } catch (error) {
            console.log(error)
            
        }
       
        
    } catch (error) {
        console.log("error",error);
        
    }

}