
import { useEffect, useState } from "react";
import { MENU_API_URL_1, MENU_API_URL_2 } from "../Config/constants";

const useRestaurantMenu = (resId) => {

    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API_URL_1 + resId + MENU_API_URL_2);
        const json = await data.json();
        setRestaurantData(json.data);
    };

    return restaurantData;
}

export default useRestaurantMenu;