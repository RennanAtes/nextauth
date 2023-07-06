"use client"

import axios from "axios";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";


export default function Client(){

    const { data : session}  = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/')
        }
    });
    console.log(session)

    // async function teste_api(){
    //     const headers = {
    //         Authorization: `Bearer ${session.accessToken}`,
    //     };
    //     try {
        
    //     const response = await axios.post('http://127.0.0.1:8000/api/teste', { headers });
    //     console.log(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }
    return(
        <div>
            { session ? 
            <div>
                <p>{ session.accessToken }</p>
                {/* <button type="button" onClick={teste_api}>
                    Teste
                </button>  */}
            </div>
            : 
            
            <p>Nada</p>}
            
        </div>
    )
}