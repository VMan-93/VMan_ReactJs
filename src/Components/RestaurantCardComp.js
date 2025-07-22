import { RES_IMG_URL } from "../Config/constants";

const RestaurantCardComp = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, 
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla } = resData?.info;
    return (
        <div className="res-card">
            <img 
            className="res-image" 
            alt="res-image"
            src={RES_IMG_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime + "Minutes"}</h4>
        </div>
    )
}

export default RestaurantCardComp;