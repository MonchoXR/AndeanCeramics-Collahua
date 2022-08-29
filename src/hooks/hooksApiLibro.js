import { useEffect, useState } from 'react';

export const UseLibro=(url) =>{
    
    const [libro, setlibro] = useState([]);

    useEffect(()=>{

            // const URLGET="https://api.itbook.store/1.0/new";
    // fetch(URLGET)
    //   .then(resultado=>resultado.json())
    //   .then(data => {
    //         let libros=data.books;
    //         setlibro(libros[0].image);
    //         console.log("llamo2")
    //**************Con ASYNC****************/
      // const getData = async()=>{
      //    const URLGET="https://api.itbook.store/1.0/new";
      //    const resultado = await fetch(URLGET);
      //    const data = await resultado.json();
      //    setTimeout(()=>{
      //     console.log(data.books)

      //        setlibro(data.books[0]);
  

      //    },3000)
       
      // }
      // getData();

            
          const getData = async()=>{
            console.log("mi url", url)
             const resultado = await fetch(url);
             const data = await resultado.json();
            //  setTimeout(()=>{
                 setlibro(data.books[0]);
            //  },5000)
           
          }
          getData();
          
      },[url])
    

          return{            
            libro

          };

}