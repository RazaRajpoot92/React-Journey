import "../styles/restuarant.css"
import { IMG_URL, } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResData from "../utils/useResData";
import { useState } from "react"

const Restaurant = ()=>{
    const {id} = useParams()
    const resturant = useResData(id)
    const [show, setShow] = useState(false)

    if(resturant===null) return <Shimmer />
   
    const {
        name,
        cloudinaryImageId,
        cuisines,
        costForTwoMessage,
        avgRatingString,
        totalRatingsString
    } = resturant


    const newLocal = "";
    return (
        <>
        <div className="flex flex-col gap-3 mt-5 items-center">
            <div className="w-full flex items-center justify-around">
                <div className="res-content">
                    <h1 className="font-bold">{name}</h1>
                    <div className="flex gap-3">
                        <h3>{cuisines.join(", ")}</h3>
                        <h3>{costForTwoMessage}</h3>
                    </div>
                    <h4> Rated:{avgRatingString}</h4>
                    <p>{totalRatingsString}</p>
                </div>
                
                <img id="resimg" src={`${IMG_URL}/${cloudinaryImageId}`} alt="" />
            </div>
            
<div className="flex gap-2  flex-row-reverse justify-around">

<button className="p-2 h-10 w-56 border border-blue-200 bg-green-400 hover:bg-green-300 rounded-lg"
>Add to Cart</button>

    <div className="w-[650px] p-2 rounded-lg  bg-slate-100 ">
        <div onClick={()=>setShow(!show)} className="flex h-10 items-center cursor-pointer justify-between">
        <h1>Description</h1>
        <span>{show?"⬆":"⬇"}</span>
        </div>

{
    show&&(<div className=" py-4">
            <p>A product description is a form of marketing copy used to describe and explain the benefits of your product. In other words, it provides all the information and details of your product on your ecommerce site. These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky.</p>
          </div>)
}
        

    </div>
</div>    
        </div>
        
        </>
    )
}

export default Restaurant;