import { useState, useEffect } from "react"
import { CORS_PROXY,RESTAURANT_API } from "./constants"
const useResData = (id)=>{
    
    const [resturant, setRestaurant] = useState(null)

    useEffect(()=>{
        fetchResData()
    },[])

    const fetchResData = async()=>{
        const data = await fetch(`${CORS_PROXY+RESTAURANT_API+id}`)
        const result = await data.json()
        setRestaurant(result?.data?.cards[2]?.card?.card?.info)
        //console.log(result?.data?.cards[2]?.card?.card?.info)
    }

    return resturant
}

export default useResData;