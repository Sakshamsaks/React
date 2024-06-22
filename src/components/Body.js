import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useInView } from "react-intersection-observer";

const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [listOfTopRestaurants, setListOfTopRestaurants] = useState([]);

    const [searchText, setSearchText]= useState("");

    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const fetchData = async (page) => {
        setLoadingMore(true);
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        const topRestaurants=json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        setListOfRestaurants((prev) => [...prev, ...restaurants]);
        setFilteredRestaurant((prev) => [...prev, ...restaurants]);
        setListOfTopRestaurants(topRestaurants);

        setLoadingMore(false);
    };

    useEffect(() => {
        if (inView && !loadingMore) {
            setPage((prevPage) => prevPage + 1);
        }
    }, [inView,loadingMore]);

    const onlineStatus=useOnlineStatus();

    if(onlineStatus===false){
        return (
            <h1>Looks you are offline!!!</h1>
        );
    }

    return ListOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body px-40 z-0">
            <div className="filter flex flex-items-center">
                <div className="search m-4 p-4 ">
                    <input type="text" value={searchText} 
                        onChange={(e)=>{
                            setSearchText(e.target.value);
                    }} placeholder="Search for Restaurant.." />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        
                        const filteredRestaurant=ListOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <div className="m-4 p-8 ">
                    <button className="px-4 py-2 bg-blue-100 rounded-lg hover:scale-95"
                        onClick={() => {
                            const filteredList = ListOfRestaurants.filter(res => res.info.avgRating > 4);
                            setListOfRestaurants(filteredList);
                        }}>
                        Top Rated restaurant
                    </button>
                </div>
            </div>

            <h1 className="text-2xl font-bold pl-8">Top Restaurant chains</h1>
            <div className="flex  overflow-x-scroll">
                {
                    listOfTopRestaurants.map(restaurant=>
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>
                    )
                }
            </div>

            <h1 className="text-2xl font-bold pl-8">Restaurants with online food delivery</h1>
            <div className="grid grid-cols-4">
                {
                    filteredRestaurant.map(restaurant =>
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant.info} /></Link>)
                }
            </div>

            <div ref={ref} className="h-8 flex justify-center items-center">
                {loadingMore ? <Shimmer /> : inView && <div>Loading more items...</div>}
            </div>
            
        </div>
    );
};

export default Body;
