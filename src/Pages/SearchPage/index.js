import React, { useState, useEffect } from "react";
import fetchSearchSuggestion from "../../ServerAPI/fetchSearchSuggestion.js";

function SearchPage() {
  const [suggestions, setSuggestions] = useState(["heelo"]);

  return (
    <span>
      <input
        onChange={async event => {
          let s = await fetchSearchSuggestion(event.target.value);

          setSuggestions(s.result);
        }}
      ></input>

      {suggestions.map((item, index) => (
        <div key={`suggestion ${index}`}>
          <button> {item}</button>
        </div>
      ))}
    </span>
  );
}

const handleChange = async event => {};

export default SearchPage;
