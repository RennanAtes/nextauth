"use client"
import { useSession, signOut } from "next-auth/react"


export default function SessionDate(){

    const { data : session } = useSession();
    console.log(session)


    return (
        <div>

            { session ? 
            
            <div>
                Está logado
                <p>{session.user.name}</p>
                <p>Access Token: {session.accessToken}</p>
                <button className="border-2 border-black bg-black text-white rounded-md p-1   "
                onClick={() => signOut()}>Sair</button>

            </div>
            
            : 
            
            <span>Nao esta logado!</span>

            }

        </div>
    )
}