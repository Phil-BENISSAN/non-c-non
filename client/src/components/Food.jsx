
import { useParams } from 'react-router-dom';

import foodList from "../assets/df_potager.json";
import DifficultyWateringCan from './DifficultyWateringCan';

function Food() {
const food = useParams();
const aliment = foodList.find(foodItem => foodItem.nom === food.food);

const {
    type,
    nom,
    photo_legume,
    Exposition,
    Rusticité,
    info_pratique,
    difficulté,
    Profondeur_semis,
    Espacement,
    Ecart_rangs,
    temps_levé,
    température_levée,
    semis_récolte,
  } = aliment;

    return (
        <article className="food_card">
          <h2 className="food_name"> {nom} </h2>
          <h3 className="food_type"> {type} </h3>
          <img src={photo_legume} alt={nom} className="food_photo" />
          <p>Exposition : {Exposition}. </p>
          <p>Rusticité : {Rusticité}. </p>
          <p>À savoir : {info_pratique}. </p>
          <p>Difficulté : <DifficultyWateringCan difficulté={difficulté}/> </p>
          <p>Profondeur des semis : {Profondeur_semis} cm.</p>
          <p>Espacement : {Espacement} cm.</p>
          <p>Écart entre les rangs : {Ecart_rangs} cm.</p>
          <p>Temps de levée : {temps_levé} jours.</p>
          <p>Température de levée : {température_levée}°c. </p>
          <p>Du semis à la récolte : {semis_récolte} jours.</p>
        </article>
      );
    }
  

export default Food;