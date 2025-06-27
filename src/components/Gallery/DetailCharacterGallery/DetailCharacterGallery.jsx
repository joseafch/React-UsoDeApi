import EpisodiosCharacter from '../Episodios/Episodios';
import LocationCharacter from '../Location/location';
import './DetailStyle.css'


export default function DetailCharacterGallery({items2,urlCharacter}){

    return(
        <div className='detail-div'>
 {items2.map((item,index)=>(
<div key={index}>
<div><img src={item?.image} alt='aa' className='charachterDetail-gallery-img'></img></div>
<div><p>Nombre: {item?.name}</p></div>
<div><p>Localidad :</p></div>

{/* {console.log ("nalgas paradas",item?.episode)}  */}
<LocationCharacter locationURL={item?.location.url}></LocationCharacter>
<div><p>especie: {item?.species}</p></div>
<EpisodiosCharacter episodios={item?.episode}></EpisodiosCharacter>

</div>

 ))}
        </div>
    )
}
