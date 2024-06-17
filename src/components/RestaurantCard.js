import { CDN_URL } from "../utils/contants";

const RestaruantCard = (props) =>{
    const {resData}=props;

    const {
        cloudinaryImageId = "",
        name = "Unknown",
        avgRating = "N/A",
        cuisines = [],
        costForTwo = "N/A",
        deliveryTime = "N/A"
    } = resData;

    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
};

export default RestaruantCard;