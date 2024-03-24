import { useEffect, useState } from "react";
import "../styles/restuarant.css"
import { IMG_URL, RESTAURANT_API,CORS_PROXY } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const Restaurant = ()=>{

    const [resturant, setRestaurant] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        fetchResData()
    },[])

    const fetchResData = async()=>{
        const data = await fetch(`${CORS_PROXY+RESTAURANT_API+id}`)
        const result = await data.json()
        setRestaurant(result.data.cards[0].card.card.info)
        console.log(result.data.cards[0].card.card.info)
    }
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