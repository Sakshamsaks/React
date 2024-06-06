import { CDN_URL } from "../utils/contants";

const RestaruantCard = (props) =>{
    const {resData}=props;

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,deliveryTime} =resData?.data;

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