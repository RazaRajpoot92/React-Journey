import "../../index.css"
import {useEffect,useState} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"

const Card = ()=>{
    const [data, setData] = useState([])
    const [filteredData, setfilteredData] = useState("")
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/api/seo/getListing?lat=12.960059122809971&lng=77.57337538383284")
        const result = await data.json()
        
        setData(result.data.success.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
        setfilteredData(result.data.success.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
        
        console.log(result.data.success.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
    }
    if(data.length === 0 ){
        return <Shimmer />
    }

    return(
        <>
        
        <div className="searchContainer">
        
            <input className="searchBar" 
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)} 
                type="text"  />
            <button className="btnSearch"
                onClick={()=>{
            
                    const filteredData = data.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilteredData(filteredData)
                }}
            >Search</button>
        </div>
        
        <div className="container">   
        {filteredData.map((restuarant, index)=>(
<Link className="cardLink" to={"/restuarant/"+restuarant.info.id}>
            
    <div key={index} className="cardbody">
        <img className='cardImage' src={`https://media-assets.swiggy.com/swiggy/image/upload/${restuarant.info.cloudinaryImageId}`} alt="" />
        <h3>{restuarant.info.name}</h3>

        <p className="para">{restuarant.info.locality}</p>       
    </div>
    </Link>
        ))}
      </div> 
        </>
    )
}

export default Card;