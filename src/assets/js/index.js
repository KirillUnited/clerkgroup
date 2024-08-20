import "../styles/app.scss";
import { handleMediaQueryChange, mediaQuery } from "./pricing-slider";
import "./custom-select";
import MobileMenu from "./mobile-menu";

window.addEventListener('DOMContentLoaded', () => {
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    new MobileMenu({});
})
