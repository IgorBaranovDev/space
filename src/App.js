import "./App.scss";
import { useState, useEffect } from "react";
import logoImg from "./logo.svg";
import shoppingCartImg from "./shopping-cart.svg";
import shoppingCartImgActive from "./shopping-cart-active.svg";

const dataOffers = [
  {
    id: 1,
    title: "Move the borders of reality!",
    subTitle: "Go on a space adventure!",
  },
  {
    id: 2,
    title: "Space is not just stars and planets",
    subTitle: "Go on a space adventure ",
  },
  {
    id: 3,
    title: "For those who dream of stars ",
    subTitle: "Our offer: make your dream come true",
  },
  {
    id: 4,
    title: "Fulfill your fantastic dreams",
    subTitle: "Space has never been so close",
  },
];

const dataInfo = {
  content:
    "Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.",
};

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 360);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 360);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    if (isMobileView) {
      setMenuOpen(false);
    }
  };
  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div id="header__logo" className="header__logo">
        <a href="#app" className="header-link" title="space">
          <img src={logoImg} alt="logo" />
        </a>
      </div>
      <nav className={`header__nav ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" onClick={handleMenuItemClick}>
          Home
        </a>
        <a href="#products" onClick={handleMenuItemClick}>
          Products
        </a>
        <a
          href="#shopping-cart"
          onClick={handleMenuItemClick}
          className="cart-link"
        >
          <img src={shoppingCartImg} alt="shopping cart" className="inactive" />
          <img
            src={shoppingCartImgActive}
            alt="shopping cart"
            className="active"
          />
        </a>
      </nav>
      {isMobileView && (
        <div className="burger__menu" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </header>
  );
}

function Main() {
  return (
    <main className="main">
      <BannerContainer />
      <OffersContainer offers={dataOffers} />
      <InfoContainer info={dataInfo} />
    </main>
  );
}

function BannerContainer() {
  const [isLoadedImg, setIsLoadedBgImg] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoadedBgImg(true);
    };
    img.src = process.env.PUBLIC_URL + "/images/bg-header.png";
  }, []);

  return (
    <div className={`banner ${isLoadedImg ? "loaded-bg" : "placeholder"}`}>
      <div className="banner__content">
        <h1 className="banner__title">
          Discover the vast expanses of <span>space</span>
        </h1>
        <p className="banner__sub-title">
          Where the possibilities are <span>endless!</span>
        </p>
        <button className="button_more">Learn more</button>
      </div>
    </div>
  );
}

function OffersContainer({ offers }) {
  return (
    <div className="offers">
      <h2 className="offers__header">Offers</h2>
      <div className="offers__container">
        {offers.map((offer) => (
          <div className="offer__item" key={offer.id}>
            <h1 className="offer__title">{offer.title}</h1>
            <p className="offer__sub-title">{offer.subTitle}</p>
            <button className="offer__bth">Learn more</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoContainer({ info }) {
  return (
    <div className="info">
      <h2 className="info__header">Embark on a space journey</h2>
      <div className="info__content">
        <p className="content">{info.content}</p>
      </div>
      <a href="#readMore" className="info__link">
        Read more
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__content">Exciting space adventure!</p>
    </footer>
  );
}

export default App;
