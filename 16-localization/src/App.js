// Kaynak dosyası : https://formatjs.io/docs/getting-started/installation

// Çoklu dil ile alakalı çözüm

import logo from './logo.svg';
import './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl'
import { useState, useEffect } from "react"

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya",
    description: "{count} yeni mesajınız var.",
  },
  "en-US": {
    title: "Hello World",
    description: "You have {count} new messages.",
  },
};


function App() {

  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    localStorage.setItem("locale", locale)
  }, [locale])

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>

        <FormattedMessage id={"title"} />

        <br />
        <br />
        <br />

        <span>
          <FormattedMessage id={"description"} values={{ count: 4 }} />
        </span>


        <br />
        <br />
        <br />

        <button onClick={() => setLocale("tr-TR")}>Tr</button>
        <br />
        <br />
        <button onClick={() => setLocale("en-US")}>En</button>

      </IntlProvider>



    </div>
  );
}

export default App;
