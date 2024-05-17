import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Foods from "../components/Foods";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import foodList from "../assets/df_potager.json";

function FoodPage() {
    // const foodList = useLoaderData;
    const [foods, setFoods] = useState([]);
      
        // useEffect(() => {
        //   fetch("http://localhost:3310/api/foods")
        //     .then((response) => response.json())
        //     .then((data) => setFoods(data))
        //     .catch((err) => console.error(err));
        // }, []);

        useEffect(()=> {
          setFoods(foodList);
        }, []);
      
        const [selectedFood, setSelectedFood] = useState("");
      
        const handleFoodChange = (event) => {
          setSelectedFood(event.target.value);
        };
        const filteredFood =
          selectedFood === ""
            ? foods
            : foods.filter(
                (food) => food.type === selectedFood
              );
      
        return (
          <>
          <NavBar />
            <h1>My foods</h1>
            <form className="food_form">
              <label htmlFor="food_select">
                Filter by {" "}
                <select
                  id="food_select"
                  onChange={handleFoodChange}
                  value={selectedFood}
                >
                  <option value="">---</option>
                    <option value="Legumes">Légumes</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Aromates">Aromates</option>
                </select>
              </label>
            </form>
            <ul className="food_list" >
              {filteredFood.length > 0 &&
                filteredFood.map((food) => (
                  <li key={food.id}>
                    <Link to={`/aliments/${food.nom}`}>
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