
import {z} from 'zod';
export const userSignUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});

export const userSignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const codeSubmitSchema = z.object({
    code: z.string(),
    problemId: z.string(),
    language: z.string(),
}); 



export type CodeType=z.infer<typeof codeSubmitSchema>;
