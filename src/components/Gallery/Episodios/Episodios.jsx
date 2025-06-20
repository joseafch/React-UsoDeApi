import { useEffect,useState  } from "react"
import axios from 'axios';
import './Episodios.css'

export default function EpisodiosCharacter ({episodios}){
// console.log("episodios",episodios)

    const[EpisodiosData,setEpisodiosData]=useState([])

  useEffect(() => {
    if (episodios && episodios.length > 0) {
      getEpisodios();
    }
  }, [episodios]);
    
const getEpisodios = async () => {
    try {
      const responses = await Promise.all(episodios.map((url) => axios.get(url)));
      const data = responses.map((res) => res.data);
      setEpisodiosData(data);
      console.log("Episodios cargados:", data);
    } catch (error) {
      console.error("Error cargando episodios:", error);
    }
  };
      console.log("datos autilizar :", EpisodiosData);

  return (
    <div>
        <div><h3>EPISODIOS</h3></div>
        <table>
     <thead>
          <tr>
            <th>Nombre</th>
            <th>Lanzamiento</th>
            <th>Temporada/episodio</th>
          </tr>
        </thead>
        <tbody>
          {EpisodiosData.map((episodio) => (
            <tr key={episodio.id}>
              <td>{episodio?.name}</td>
              <td>{episodio?.air_date}</td>
              <td>{episodio?.episode}</td>
            </tr>
          ))}
        </tbody>
        </table>

    </div>
  )

}