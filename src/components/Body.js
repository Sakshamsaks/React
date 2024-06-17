import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
        console.log(json);

        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRestaurants(restaurants);

        setFilteredRestaurant(restaurants);
    };

    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                    }} />
                    <button onClick={()=>{
                        console.log(searchText);

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
                        <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />)
                }
            </div>
        </div>
    );
};

export default Body;
