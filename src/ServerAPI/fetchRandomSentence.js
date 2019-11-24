const fetchRandomSentence = async (setShowAlternateSentences, setSentenceObject) => {
setShowAlternateSentences(false);
const response = await fetch("http://localhost:500/search-random")
    .then(res => res.json())
    .then(res => {
      setSentenceObject(res);
    })
    .catch(() => console.log("error fetching sentence"));
  return response;
}

export default fetchRandomSentence;