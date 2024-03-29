import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useRestaurantData from "../utils/useRestaurantData"
import RestaurantCard,{RatedCard} from "./RestuarantCard"


const TopRatedCard = RatedCard(RestaurantCard)
const Card = ()=>{
  const [data, setData, filteredData, 
    setfilteredData, searchText, 
    setSearchText] = useRestaurantData()
    

    if(data.length === 0 ) return <Shimmer />

    return(
        <>
        
        <div className="w-full h-12 bg-slate-200 flex justify-center items-center">        
            <input className="border h-8 w-60 border-blue-400 rounded p-2  focus:border-blue-400 focus:outline-none m-1" 
                value={searchText}
                onChange={(e)=>setSearchText(e.target.value)} 
                type="text"  />
            <button className="px-4 py-1 m-2 border-blue-400 bg-blue-300 rounded-md"
                onClick={()=>{
            
                    const filteredData = data.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilteredData(filteredData)
                }}
            >Search</button>
        </div>
        
    <div className="flex justify-center  p-4 gap-2 flex-wrap">   
                {console.log(filteredData)}
        {filteredData.map((restuarant, index)=>(

        <Link key={restuarant.info.id} 
        className="cardLink" 
        to={"/restuarant/"+restuarant.info.id}>
                
           {restuarant.info.avgRating>4?<TopRatedCard restuarant={restuarant} />:<RestaurantCard restuarant={restuarant} />} 
        </Link>
            ))}
    </div> 
        </>
    )
}



export default Card;
