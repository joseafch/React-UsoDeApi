import axios from "axios"
import { useEffect,useState  } from "react"
import { useParams } from "react-router-dom"
import CharactersGallery from "../../components/Gallery/CharactersGallery/CharactersGallery"
import './EpisodeDetail.css'

export default function EpisodeDetail(){
    const[episodes,setEpisodes]=useState()
    const[characterData,setCharacterData]=useState([])

    const id =useParams().id

    useEffect(()=>getEpisode(),[])

    const getEpisode = ()=>{
        axios(`https://rickandmortyapi.com/api/episode/${id}`)
        .then(res=>{
            setEpisodes(res.data)

        })
    } 
    console.log("episodes", episodes)


  useEffect(() => {
    if (episodes && episodes.characters && episodes.characters.length > 0) {
      getCharacterData();
    }
  }, [episodes]);
    
    const getCharacterData = async () => {
    try {
      const responses = await Promise.all(episodes.characters.map((url) => axios.get(url)));
      const data = responses.map((res) => res.data);
      setCharacterData(data);
      console.log("personajes cargados:", data);
    } catch (error) {
      console.error("Error cargando episodios:", error);
    }
  };
    // console.log("episodes", episodes.characters)
 return(
        <div>
            <div><h3>Episode</h3></div>

            <div><h3 className="name-episode">{episodes?.name} </h3></div>
            <div><h3>Air Date: {episodes?.air_date} </h3></div>
            <div><h3>Episode/champer: {episodes?.episode}</h3></div>
            <div><h3>Characters </h3></div>
          <CharactersGallery items={characterData}></CharactersGallery>
        
        </div>
    )

}