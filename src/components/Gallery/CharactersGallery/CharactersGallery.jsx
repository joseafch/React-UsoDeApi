import { Link } from "react-router-dom";
import './CharacterGalleryStyle.css'
export default function CharactersGallery({items}){

 console.log('esto me daria todo characters',items);
    return(
        <div className="div-characters-gallery">
            <div className="cards-box">
{  items.map((item)=>(
    <div className="cards" key={item.id}>
<Link to={`/Characters/${item.id}`}><div><img  src={item?.image} alt='aa' className="character-Galery-img"></img></div></Link>
<p>{item?.name}</p>
    </div>
))}
</div>
        </div>
    )

}