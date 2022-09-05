// Import Components
import GlobalStyle from "./components/GlobalsStyle";
import Searchbar from "./components/Searchbar";
import Filterbar from "./components/Filterbar";
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
  const [filterOptionActive, setFilterOptionActive] = useState(false);
  const [centuryOptions, setCenturyOptions] = useState([]);
  const [techniqueOptions, setTechniqueOptions] = useState([]);
  const [classificationOptions, setClassificationOptions] = useState([]);

  // Fetch Data from API and store it inside state. This fetch will run when the sites loads!
  useEffect(() => {
    fetchDataHandler(false, loadedPage, loadedResults, "");
    fetchSelectOptions("century");
    fetchSelectOptions("technique");
    fetchSelectOptions("classification");
  }, []);

  // Handler
  const fetchDataHandler = async (
    reRender,
    pageNum,
    resultsNum,
    filterOption
  ) => {
    console.log(
      `https://api.harvardartmuseums.org/object?${filterOption}&size=${resultsNum}&page=${pageNum}&apikey=${process.env.REACT_APP_HARVARD_API_KEY}`
    );
    const res = await fetch(
      `https://api.harvardartmuseums.org/object?${filterOption}&size=${resultsNum}&page=${pageNum}&apikey=${process.env.REACT_APP_HARVARD_API_KEY}`
    );
    let data = await res.json();
    console.log(data.records);
    if (!reRender)
      data.records.map((item) => setResults((current) => [...current, item]));
    else {
      setResults(data.records);
    }
    setLoadedPage(loadedPage + 1);
  };

  const fetchSelectOptions = async (selectName) => {
    const res = await fetch(
      `https://api.harvardartmuseums.org/${selectName}?size=500&sort=name&sortorder=asc&apikey=${process.env.REACT_APP_HARVARD_API_KEY}`
    );
    let data = await res.json();
    if (selectName === "century") {
      setCenturyOptions(data.records);
    } else if (selectName === "technique") {
      setTechniqueOptions(data.records);
    } else if (selectName === "classification") {
      setClassificationOptions(data.records);
    }
  };

  const loadMoreResultsHandler = () => {
    fetchDataHandler(false, loadedPage, loadedResults, "");
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Searchbar fetchDataHandler={fetchDataHandler} />
      <Filterbar
        fetchDataHandler={fetchDataHandler}
        centuryOptions={centuryOptions}
        techniqueOptions={techniqueOptions}
        classificationOptions={classificationOptions}
      />
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
