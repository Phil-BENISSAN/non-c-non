import PropTypes from "prop-types";

import "./Foods.css";

function Foods({ food }) {
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
  } = food;

  return (
    <article className="food_card">
      <h2 className="food_name"> {nom} </h2>
      <h3 className="food_type"> {type} </h3>
      <img src={photo_legume} alt={nom} className="food_photo" />
      <p>Exposition : {Exposition}. </p>
      <p>Rusticité : {Rusticité}. </p>
      <p>À savoir : {info_pratique}. </p>
      <p>Difficulté : {difficulté} </p>
      <p>Profondeur des semis : {Profondeur_semis} cm.</p>
      <p>Espacement : {Espacement} cm.</p>
      <p>Écart entre les rangs : {Ecart_rangs} cm.</p>
      <p>Temps de levée : {temps_levé} jours.</p>
      <p>Température de levée : {température_levée}°c. </p>
      <p>Du semis à la récolte : {semis_récolte} jours.</p>
    </article>
  );
}

Foods.propTypes = {
  food: PropTypes.shape({
    type: PropTypes.string.isRequired,
    nom: PropTypes.string.isRequired,
    photo_legume: PropTypes.string.isRequired,
    Exposition: PropTypes.string.isRequired,
    Rusticité: PropTypes.string.isRequired,
    info_pratique: PropTypes.string.isRequired,
    difficulté: PropTypes.number.isRequired,
    Profondeur_semis: PropTypes.number.isRequired,
    Espacement: PropTypes.number.isRequired,
    Ecart_rangs: PropTypes.number.isRequired,
    temps_levé: PropTypes.number.isRequired,
    température_levée: PropTypes.number.isRequired,
    semis_récolte: PropTypes.string.isRequired,
  }),
};

export default Foods;
