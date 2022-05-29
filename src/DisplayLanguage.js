import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {
  const Language = useContext(LanguageContext);

  const Strings = {
    en: {
      CurrentLanguage: "Current language is: English",
    },

    it: {
      CurrentLanguage: "La lingua attuale è: Italiano",
    },
  };

  return (
    <div>
      <h3>{Strings[Language].CurrentLanguage}</h3>
    </div>
  );
}

// import React from "react";
// import { LanguageContext } from "./LanguageContext";


// const Strings = {
//   en: {
//     CurrentLanguage: "Current language is: English",
//   },
//   it: {
//     CurrentLanguage: "La lingua attuale è: Italiano",
//   },
// };

// export class DisplayLanguage extends React.Component {
//   render() {
//     return <div>
//       <LanguageContext.Consumer>
//           {Language => {
//             return(
//               <div>
//                 <h3>{Strings[Language].CurrentLanguage}</h3>
//               </div>
//             )
//           }}
//         </LanguageContext.Consumer>
//     </div>;
//   }
// }