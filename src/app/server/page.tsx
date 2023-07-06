
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";
import axios from "axios";
import { json } from "node:stream/consumers";
export default async function Server(){

    const session = await getServerSession(authOptions);
    console.log(session)
    if(!session) redirect('/')





    return (
        <div>
            <h1>Server page</h1>





        </div>
    )
}