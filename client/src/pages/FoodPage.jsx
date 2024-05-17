import {  useState, useEffect } from "react";
import { useLoaderData, Link, useParams } from "react-router-dom";

import Foods from "../components/Foods";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function FoodPage() {
    const foodList = useLoaderData;
    const [foods, setFoods] = useState([]);
    const { type } = useParams();
      
        useEffect(() => {
          fetch("http://localhost:3310/api/foods")
            .then((response) => response.json())
            .then((data) => setFoods(data))
            .catch((err) => console.error(err));
        }, []);
      
        const [selectedFood, setSelectedFood] = useState("");
      
        const handleFoodChange = (event) => {
          setSelectedFood(event.target.value);
        };
        const filteredFood =
          selectedFood === ""
            ? foodList
            : foodList.filter(
                (food) => food.type === selectedFood
              );
      
        return (
          <>
          <NavBar />
            <h1>My foods</h1>
            <form className="food_form">
              <label htmlFor="food_select">
                Filter by type {" "}
                <select
                  id="food_select"
                  onChange={handleFoodChange}
                  value={selectedFood}
                >
                  <option value="">---</option>
                  {foods.map((food) => (
                    <option key={food.id} value={food.id}>
                      {food.type}
                    </option>
                  ))}
                </select>
              </label>
            </form>
            <ul className="food_list" >
              {filteredFood.length > 0 &&
                filteredFood.map((food) => (
                  <li key={food.id}>
                    <Link to={`/foods/${food.id}`}>
                      <Foods food={food} />
                    </Link>
                  </li>
                ))}
            </ul>
            <Footer />
          </>
        );
      }


export default FoodPage;