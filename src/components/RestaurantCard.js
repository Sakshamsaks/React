import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/contants";

const RestaruantCard = (props) =>{
    const {resData}=props;

    const {
        cloudinaryImageId = "",
        name = "Unknown",
        avgRating = "N/A",
        cuisines = [],
        costForTwo = "N/A",
        sla = "N/A"
    } = resData;

    return (
        <div data-testid="resCard" className="m-4 p-4 w-[300px] hover:scale-95 delay-150 duration-300 ease-in-out ">
            <div className="relative">
                <img className="h-[180px] w-full rounded-2xl shadow-md" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
                <div className="absolute bottom-0 left-5">
                    <span className="text-white text-2xl font-bold">{costForTwo}</span>
                </div>
            </div>
            <h3 className="font-bold pt-4 text-lg truncate">{name}</h3>
            <h4>🌟 {avgRating} ⌛ {sla.slaString}</h4>
            <h4 className="truncate">{cuisines.join(", ")}</h4>
            
        </div>
    )
};

export default RestaruantCard;