import { Link } from "react-router-dom";

function Introduction() {
  return (
    <section className="home_section_intro">
      <h1>Bienvenue !</h1>
      <div className="home_intro_frame_deco"></div>
      {/* <article className="home_intro_article"> */}
      <p>
      Savez-vous planter les choux ? 
      <br></br>
      <br></br>
        Découvrez des astuces pour créer votre propre potager
      </p>
      <img src="../src/assets/images/carots.png" alt="carottes" className="home_img_carots"/>
      {/* </article> */}
      <img src="../src/assets/images/arrow.png" alt="arrow" className="home_intro_arrow"/>
      {/* <h2 className="home_rounded_text">
        <span className="char1">A</span>
        <span className="char2">S</span>
        <span className="char3">T</span>
        <span className="char4">U</span>
        <span className="char5">C</span>
        <span className="char6">E</span>
        <span className="char7">S</span>
      </h2> */}
      <Link to="/informations"><img src="../src/assets/images/gants.png" alt="gants" className="home_intro_img"></img></Link>
    </section>
  );
}

export default Introduction;
