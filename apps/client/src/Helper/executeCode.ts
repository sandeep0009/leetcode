import { useParams } from "react-router-dom"
import { axiosInstance } from "./axios";


export const executeCode=async(
    code:string,
    langauge:string,
    testCase:any

)=>{

    const problemId=useParams();

    const replace:{[key:string]:any}=testCase;

    let newCode=code;

    Object.keys(replace).forEach((key)=>{
        newCode=newCode.replace(new RegExp(`{{{${key}}}}`, "g"), replace[key]);
    });
    newCode = newCode.replace(/\\n/g, " ");
    try {
        await axiosInstance.post('/submit',{
            code:newCode,
            langauge:langauge==="cpp"?"c++":langauge,
            problemId
        });
        const res=await axiosInstance.get(`/check-problem/${problemId}`);
        return res.data;
        
    } catch (error) {
        console.log("error",error);
        
    }

}