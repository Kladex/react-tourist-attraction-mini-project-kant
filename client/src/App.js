import "./App.css";
import Header from "./component/Header";
import SearchTravelDestination from "./component/SearchTravelDestination";
import useSearchTravel from "./hooks/useSearchTravel";

function App() {
  const {
    searchText,
    handleSearchTextChange,
    destinations,
    handleSearchTextTag,
  } = useSearchTravel();

  return (
    <div className="app">
      <Header
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
      <SearchTravelDestination
        destinations={destinations}
        searchText={searchText}
        handleSearchTextTag={handleSearchTextTag}
      />
    </div>
  );
}

export default App;
