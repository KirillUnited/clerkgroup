import "../styles/app.scss";
import "./pricing-slider"
import { handleMediaQueryChange, mediaQuery } from "./pricing-slider";

window.addEventListener('DOMContentLoaded', () => {
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
})
