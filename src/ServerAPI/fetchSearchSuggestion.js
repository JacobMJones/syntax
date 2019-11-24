const fetchSearchSuggestion = async (searchString) => {

    const response = await fetch(`http://localhost:500/search-suggestion?searchText=${searchString}`)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          return res;
        })
        .catch(() => console.log("error fetching sentence"));
      return response;
    }
    
    export default fetchSearchSuggestion;