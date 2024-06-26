import { useLoaderData } from "react-router-dom";
import UserPlaceTable from "../components/UserPlaceTable";


const MyPlaces = () => {
    const loadedPlace = useLoaderData();
    const { _id } = loadedPlace;
    return (
        <div>
            {
                loadedPlace.map((place, indx) => <UserPlaceTable key={_id} place={place} indx={indx} />)
            }
        </div>
    );
};

export default MyPlaces;