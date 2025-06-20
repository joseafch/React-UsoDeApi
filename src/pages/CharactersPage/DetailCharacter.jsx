import { useEffect, useState } from "react";
import axios from 'axios';
// import CharactersGallery from "../../components/Gallery/CharactersGallery/CharactersGallery";
import { useParams } from "react-router-dom";
import DetailCharacterGallery from "../../components/Gallery/DetailCharacterGallery/DetailCharacterGallery";

// import { useForm } from 'react-hook-form';
export default function DetailCharacter(){
    const[character,setCharacter]=useState()
const id =useParams().id
    useEffect(()=>getCharacters(),[])
    const getCharacters = ()=>{
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res=>{
            // console.log("datos del RESPErso",res);
            // console.log("datos del personaje",res.data);
            setCharacter(res.data)

        })
    } 
    // console.log('esto es  personaje solo',character);

    return(
        <div>
        <DetailCharacterGallery items2={[character]}></DetailCharacterGallery>
  
      

        </div>
    )
}