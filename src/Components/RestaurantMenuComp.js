import { useParams } from "react-router";
import ShimmerComp from "./ShimmerComp";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenuComp = () =>
{
    const {resId} = useParams();

    const restaurantData = useRestaurantMenu(resId); //custom hook

    if (restaurantData === null ) return <ShimmerComp/>;

    const { name, cuisines, costForTwoMessage} = 
        restaurantData?.cards[2].card?.card?.info; // Check

    const { itemCards } = 
        restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map( (item) => (
                    <li key ={item.card.info.id} >{item.card.info.name} - Rs.{item.card.info.defaultPrice/100}</li>
                    ))}
            </ul>
        </div>
    )
}

export default RestaurantMenuComp;