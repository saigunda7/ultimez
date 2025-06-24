import RestaruntCard from "./RestaruntCard";
import resList from "../utils/mockData";
import{useState,useEffect}from "react";    

const Body = () => {
    const[listOfRestarunt,setlistOfRestarunt]=useState([]);
    const[filteredRestarunt,setfilteredRestarunt]=useState([]);
    const[searchText,setsearchText]=useState("");
    useEffect(() =>{fetchData();},[]);
    const fetchData=async() =>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        console.log(json);
        const restaruntData=json.data.cards[5].gridElements.infoWithStyle.resturants;
        console.log(restaruntData);
    }
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {
                    resList.map((resturant) =>(<RestaruntCard key={resturant.info.id}
                        resData={resturant}/>
                    ))
                }


            </div>

        </div>
    );
};
export default Body;