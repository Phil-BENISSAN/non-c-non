import ButtonFilter from "../components/ButtonFilter";
import Home from "../components/Home";
import Introduction from "../components/Introduction";
import "./HomePage.css";

function HomePage() {
  return (
    <>
    <Home />
    <Introduction />
    <section className="home_filter_section">
    <ButtonFilter />
    </section>
    </>
  )
}

export default HomePage;