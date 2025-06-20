import { useEffect, useState } from "react";
import axios from 'axios';
// import { Link } from "react-router-dom";
import './CharacterStyle.css'
import CharactersGallery from "../../components/Gallery/CharactersGallery/CharactersGallery";
import Pagination from "../../components/Pagination/Pagination";

// import { useForm } from 'react-hook-form';
export default function CharactersPage(){
    const[characters,setCharacters]=useState([])
    useEffect(()=>getCharacters(1),[])
    const getCharacters = (actualPage)=>{
        axios(`https://rickandmortyapi.com/api/character/?page=${actualPage}`)
        .then(res=>{
            // console.log("esto es res",res);
            // console.log("esto es data",res.data.results);

            console.log("esto tendria q ser caracteres",res.data.results);
            setCharacters(res.data.results)

        })
    } 
    console.log('esto es ',characters);

    return(
        <div>
        <div className="div-pagination-gallery">
        
       <Pagination  onChangePage={getCharacters}></Pagination>
        </div>
  <CharactersGallery items={characters}></CharactersGallery>
      

        </div>
    )
}
