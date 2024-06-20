import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText]= useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        setListOfRestaurants(restaurants);

        setFilteredRestaurant(restaurants);
    };

    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false){
        return (
            <h1>Looks you are offline!!!</h1>
        );
    }

    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
                        
                        const filteredRestaurant=ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = ListOfRestaurants.filter(res => res.info.avgRating > 4);
                        setListOfRestaurants(filteredList);
                    }}>
                    Top Rated restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant =>
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>)
                }
            </div>
        </div>
    );
};

export default Body;
