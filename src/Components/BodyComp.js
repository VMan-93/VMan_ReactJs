import RestaurantCardComp from "./RestaurantCardComp";
// import { restList } from "../Config/mockData";
import { useState } from "react";
import { useEffect } from "react";
import ShimmerComp from "./ShimmerComp";

const BodyComp = () => {

    // const [stateRestList, setStateRestList] = useState(restList);
    const [stateRestList, setStateRestList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect( () => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0317443&lng=80.1816719&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await  data.json();
        
        //Optional Chaining - Check
        setStateRestList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return stateRestList.length === 0? <ShimmerComp/> : (
        <div className="body">
            <div className="search">
                <input type="text" className="search-box" value={searchText} 
                onChange={(e) => setSearchText(e.target.value)}/> 
                <button className="search-btn" 
                onClick={ () => {
                    let filteredRestList = stateRestList.filter( 
                        restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    
                    setFilteredList(filteredRestList);
                }}
                >Search</button>
                <button className="rating-fltr"
                onClick={() => {
                    let filteredRestList = stateRestList.filter( restaurant => restaurant.info.avgRating > 4.3 );
                    setFilteredList(filteredRestList);
                }}
                >Top Rated Restaurants</button>
                <button className="reset-fltr"
                onClick={() => {
                    setFilteredList(stateRestList);
                }}
                >Reset</button></div>
            <div className="res-container">
                {
                filteredList.map( restaurant => (
                <RestaurantCardComp key={restaurant.info.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
}

export default BodyComp;