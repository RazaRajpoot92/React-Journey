import { useContext } from "react"
import UserContext from "../utils/UserContext"


const RestaurantCard = ({restuarant})=>{
    const {username} = useContext(UserContext)
    return(
        <div key={restuarant.info.id} className="w-52 gap-1 flex items-center flex-col p-2 h-[270px] border rounded-lg border-blue-200">
        <img className='w-full h-40 rounded-md' src={`https://media-assets.swiggy.com/swiggy/image/upload/${restuarant.info.cloudinaryImageId}`} alt="" />
        <div className=" w-full flex flex-col gap-1 ">
            <h3 className="font-bold text-md">{restuarant.info.name.slice(0,25)}</h3>
            <p className="text-sm text-gray-600">{restuarant.info.locality}</p>       
            <h2 className="font-bold">{restuarant.info.costForTwo}</h2>
            
        </div>
    </div>
    )
}

export const RatedCard = (RestaurantCard)=>{
    return ({restuarant})=>{
        return (
            <>
            <div className="absolute  border border-gray-400 p-1 bg-slate-100 rounded-lg m-2">🌟</div>
            <RestaurantCard restuarant={restuarant} />
            </>
        )
    }
}
export default RestaurantCard;