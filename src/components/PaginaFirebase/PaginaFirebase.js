import React, { useEffect } from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../utils/firebase";


export const PaginaFirebase = () =>{

    useEffect(()=>{

        const getData = async()=>{

            // const query = collection(db,"items") //ponemos la bd y nombre de la Collection
        }
        getData();

    },[])


    return(
        <div>Pagina FireBase</div>
    )
}