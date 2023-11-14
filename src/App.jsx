import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div id="up" className="container">
      <Header></Header>
      <Hero></Hero>
      <div className="divider"></div>
      <Main></Main>
      <div className="divider"></div>
      <Contact></Contact>
      <div className="divider"></div>
      <Footer></Footer>
      <a href="#up">
        <button className="icon-arrow-up up-btn"></button>
      </a>
    </div>
  );
}

export default App;
