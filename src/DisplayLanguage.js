import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    CurrentLanguage: "Current language is: English",
  },
  it: {
    CurrentLanguage: "La lingua attuale è: Italiano",
  },
};


export class DisplayLanguage extends React.Component {
  render() {
    return <div>
      <LanguageContext.Consumer>
          {Language => {
            return(
              <div>
                <h1>{Strings[Language].CurrentLanguage}</h1>
              </div>
            )
          }}
        </LanguageContext.Consumer>
    </div>;
  }
}
