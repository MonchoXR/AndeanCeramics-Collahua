import { useEffect, useState } from 'react';

export const UseLibro=(url) =>{
    
    const [libro, setlibro] = useState([]);
    const [state, setState] = useState(true);

    useEffect(()=>{ 
     
      // const getData = async()=>{
 
      //       try{

      //         const resultado = await fetch(url);
      //         const data =  await resultado.json();
       
      //         setlibro(data.books[0]);      
      //       }
      //       catch(err){
      //         console.log("salio un error",err)
      //       }
      //       finally{
      //         console.log("Finalizamos")
      //       }
  
      //     }
      //     getData();

        const eventLibro =()=>{

          return new Promise((resolve, reject)=>{
            // setTimeout(()=>{
              resolve(fetch(url));
              reject(err => console.log("error event libro",err))        
            // },4000)
            })
        }
        
        eventLibro()
        .then(response => response.json())
        .then((data) => {
          setlibro(data.books[0])
        })
        .finally(() => {
           setState(false)
          console.log(' completed transaccion');
        });
      
       
          
      },[url])
    

          return {libro,state }
          
          

}