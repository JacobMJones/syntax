import React, { useState, useEffect } from "react";
import fetchSearchSuggestion from "../../ServerAPI/fetchSearchSuggestion.js";
import fetchSentence from "../../ServerAPI/fetchSentence.js";
function SearchPage() {
  const [suggestions, setSuggestions] = useState(["search for something yo"]);
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
          <button
            onClick={async () => {
              
              let sentence = await fetchSentence(item);
              console.log('sentence', sentence);
            }}
          >
     
            {item}
          </button>
        </div>
      ))}
    </span>
  );
}

export default SearchPage;
