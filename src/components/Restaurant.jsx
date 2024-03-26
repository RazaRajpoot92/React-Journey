import "../styles/restuarant.css"
import { IMG_URL, } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResData from "../utils/useResData";

const Restaurant = ()=>{
    const {id} = useParams()
    const resturant = useResData(id)

    if(resturant===null) return <Shimmer />
   
    const {
        name,
        cloudinaryImageId,
        cuisines,
        costForTwoMessage,
        avgRatingString,
        totalRatingsString
    } = resturant


    return (
        <>
        <div className="res-container">

            <div className="res-content">
                <h1>{name}</h1>
                <div className="price-con">
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{costForTwoMessage}</h3>
                </div>
                <h4> Rated:{avgRatingString}</h4>
                <p>{totalRatingsString}</p>
            </div>
            
            <img id="resimg" src={`${IMG_URL}/${cloudinaryImageId}`} alt="" />
        </div>
        </>
    )
}

export default Restaurant;