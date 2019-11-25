import React, { useState, useEffect } from "react";
import fetchSearchSuggestion from "../../ServerAPI/fetchSearchSuggestion.js";

function SearchResultButton() {
  const [suggestions, setSuggestions] = useState(["search for something yo"]);
  return (
    <span>
        open stance
      {/* <input
        onChange={async event => {
          let s = await fetchSearchSuggestion(event.target.value);
          setSuggestions(s.result);
        }}
      ></input>

      {suggestions.map((item, index) => (
        <div key={`suggestion ${index}`}>
          <button> {item}</button>
        </div>
      ))} */}
    </span>
  );
}

export default SearchResultButton;
