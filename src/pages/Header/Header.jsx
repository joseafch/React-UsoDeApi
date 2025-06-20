import { Link, useLocation } from "react-router-dom";
import './HeaderStyle.css'
export default function Header(){
  const location =useLocation()  

return(
    <div className="div-header">
        <Link className="link" to={'/Characters'}>Characters</Link>
       {location.pathname!== '/' && <Link className="link" to={'/'}>Home</Link>}
    </div>
)

}