// Import Components
import GlobalStyle from "./components/GlobalsStyle";
import Searchbar from "./components/Searchbar";
import Results from "./components/Results";

// React Hooks
import { useState, useEffect } from "react";

// Styled Components
import styled from "styled-components";
import { MoreButton } from "./styles";

function App() {
  // States
  const [results, setResults] = useState([]);
  const [loadedResults, setLoadedResults] = useState(10);
  const [loadedPage, setLoadedPage] = useState(1);

  // Fetch Data from API and store it inside state. This fetch will run when the sites loads!
  useEffect(() => {
    fetchDataHandler(loadedPage, loadedResults);
  }, []);

  // Handler
  const fetchDataHandler = async (pageNum, resultsNum) => {
    const res = await fetch(
      `https://api.harvardartmuseums.org/object?century=17th century&size=${resultsNum}&page=${pageNum}&apikey=${process.env.REACT_APP_HARVARD_API_KEY}`
    );
    let data = await res.json();
    console.log(data.records);
    data.records.map((item) => setResults((current) => [...current, item]));
    setLoadedPage(loadedPage + 1);
  };

  const loadMoreResultsHandler = () => {
    console.log(loadedPage);
    fetchDataHandler(loadedPage, loadedResults);
    console.log("Loaded 10 more Results");
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Searchbar />
      <Results
        results={results}
        loadMoreResultsHandler={loadMoreResultsHandler}
        loadedPage={loadedPage}
        loadedResults={loadedResults}
        setLoadedPage={setLoadedPage}
      />
    </div>
  );
}

export default App;
