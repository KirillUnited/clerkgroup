import "../styles/app.scss";
// import "./pricing-slider"
import { handleMediaQueryChange, mediaQuery } from "./pricing-slider";
import "./custom-select";

window.addEventListener('DOMContentLoaded', () => {
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
})
