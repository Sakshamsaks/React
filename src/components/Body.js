import RestaruantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body =() =>{

    const [ListOfRestaurants, setListOfRestraunt] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                    onClick={()=>{
                        const filteredList=ListOfRestaurants.filter(res=>res.data.avgRating>4);
                        setListOfRestraunt(filteredList);
                    }}>
                    Top Rated restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    ListOfRestaurants.map(restaurant => 
                    <RestaruantCard key={restaurant.data.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
};

export default Body;