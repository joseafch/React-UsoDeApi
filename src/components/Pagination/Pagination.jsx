import { useState } from "react"
import './PaginationStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function Pagination({onChangePage}){
    let [count,setCount]=useState(1)

    const more=()=>{
        setCount(count +=1)
    }
    const rest=()=>{
        setCount(count -=1)
    }
    const changePage=(actualPage)=>{
setCount (actualPage)
onChangePage(actualPage)
    }
    return(
        <div>
            <div className="pagination-bton">
        
        {count>1 && <button  className="bton" onClick={()=> changePage(count-1)}><FontAwesomeIcon icon={faArrowLeft} /></button>}
        <p>PAG {count}</p>
        <button className="bton"  onClick={()=> changePage(count+1)}><FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
        </div>
    )
}