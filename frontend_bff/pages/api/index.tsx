import { NextApiRequest, NextApiResponse } from "next";

const todoServiceURI = "http://localhost:8080/todos"

// export function handler(req:NextApiRequest, res:NextApiResponse) {
//     res.status(200).json({message:'works'})
// }

export default async function handler(req:NextApiRequest, res:NextApiResponse) {

    // console.log(req)

    try {
        const result = await fetch(`${todoServiceURI}?owner_id=fb2baf72-a1f3-4156-94de-83960ac79675`)
        if(result.status !== 200) {
            throw new Error ("response code not good");
        }
        const data = await result.json()
        res.status(200).json(data)
    } catch(e) {
        console.error(e)
    }
    
}