import Header from "./components/semantic/Header";
import Footer from "./components/semantic/Footer";
import Logo from "./components/Logo";
import Icon from "./components/Icon";
import { IoMenuSharp } from "react-icons/io5";
import TitleIntro from "./components/TitleIntro";
import InitialState from "./InitialState.json";
import Button from "./components/Button";
import Section from "./components/Section";
import Title from "./components/Title";
import "swiper/css";
import Slider from "./components/Slider";
import Description from "./components/Description";
import Gallery from "./components/Gallery";
import CardsServise from "./components/CardsServise";
import Team from "./components/Team";
import brand1 from "./img/brand1.png";
import brand2 from "./img/brand2.png";
import brand3 from "./img/brand3.png";
import brand4 from "./img/brand4.png";
import brand5 from "./img/brand5.png";
import brand6 from "./img/brand6.png";
import SliderFullWidth from "./components/SliderFullWidth";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import SocialNetworkFooter from "./components/SocialNetworkFooter";
import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand2,
    brand3,
    brand1,
  ];
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  function changeActivity() {
    setIsActiveMenu(!isActiveMenu);
  }
  return (
    <div className="wrapper">
      <Header>
        <Logo />
        <Icon
          icon={<IoMenuSharp />}
          className="icon_nav"
          onClick={changeActivity}
        />
        {isActiveMenu && (
          <Nav menu={InitialState.menu} onClick={changeActivity} />
        )}
      </Header>
      <main className="main">
        <Section
          className="section section_intro"
          id={InitialState.section_intro.id}
        >
          <TitleIntro text={InitialState.section_intro} />
          <Button text={InitialState.section_intro.btn} />
        </Section>
        <Section
          className="section section_about-us"
          id={InitialState.section_about_us.id}
        >
          <Title text={InitialState.section_about_us} />
          <div className="section__content">
            <Slider />
            <Description obj={InitialState.section_about_us.card} />
          </div>
        </Section>
        <Section
          className="section section_featured-works"
          id={InitialState.section_gallery.id}
        >
          <Title text={InitialState.section_gallery} />
          <Gallery />
        </Section>
        <Section
          className="section section_our-services"
          id={InitialState.section_our_services.id}
        >
          <Title text={InitialState.section_our_services} />
          <CardsServise list={InitialState.section_our_services.cards} />
        </Section>
        <Section
          className="section section_small-team"
          id={InitialState.section_small_team.id}
        >
          <Title text={InitialState.section_small_team} />
          <Team cards={InitialState.section_small_team.cards} />
        </Section>
        <Section
          className="section section_what-they-says"
          id={InitialState.section_what_they_says.id}
        >
          <Title text={InitialState.section_what_they_says} />
          <SliderFullWidth cards={InitialState.section_what_they_says.cards} />
        </Section>
        <Section className="section section_list">
          {brands.map((brand, index) => (
            <img className="brand" src={brand} key={index} alt="Img" />
          ))}
        </Section>
        <Section
          className="section section_form"
          id={InitialState.section_contacts.id}
        >
          <Form initial={InitialState.section_contacts.form} />
          <Contacts initial={InitialState.section_contacts.adress} />
        </Section>
      </main>
      <Footer initial={InitialState.footer}>
        <SocialNetworkFooter />
        <p className="footer__copyright">{InitialState.footer.copyright}</p>
      </Footer>
    </div>
  );
}

export default App;
