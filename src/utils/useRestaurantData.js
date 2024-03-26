import { useState, useEffect } from "react"
import { ALL_RESTAURANT_API, CORS_PROXY } from "./constants"

const useRestaurantData = ()=>{
 
    const [data, setData] = useState([])
    const [filteredData, setfilteredData] = useState("")
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const data = await fetch(`${CORS_PROXY+ALL_RESTAURANT_API}`)
        const result = await data.json()
        
        setData(result.data.success.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
        setfilteredData(result.data.success.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
        
       // console.log(result.data.success.cards[1]?.card.card.gridElements.infoWithStyle.restaurants)
    }


    return [data, setData, filteredData, 
            setfilteredData, searchText, 
            setSearchText]
    
}

export default useRestaurantData;