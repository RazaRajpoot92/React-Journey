import "../../index.css"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useRestaurantData from "../utils/useRestaurantData"

const Card = ()=>{
  const [data, setData, filteredData, 
    setfilteredData, searchText, 
    setSearchText] = useRestaurantData()
    

    if(data.length === 0 ) return <Shimmer />

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

    <Link key={restuarant.info.id} 
    className="cardLink" 
    to={"/restuarant/"+restuarant.info.id}>
            
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