import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";

// Our translated strings
// import localeData from "/build/locales/data.json";

addLocaleData([...en, ...es]);

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
// const messages =
//   localeData[languageWithoutRegionCode] ||
//   localeData[language] ||
//   localeData.en;

ReactDOM.render(
  <BrowserRouter>
    <IntlProvider locale={language}>
      <App />
    </IntlProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
