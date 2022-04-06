import axios from "axios";
import { useState, useEffect } from "react";

function useSearchTravel() {
  const [searchText, setSearchText] = useState("");
  const [destinations, setDestination] = useState([]);

  const searchDestination = async () => {
    const results = await axios(
      `http://localhost:4001/trips?keywords=${searchText}`
    );
    setDestination(results.data.data);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchTextTag = (tag) => {
    const sameWords = searchText.includes(tag);
    if (!sameWords) {
      const allSearchText = tag + " " + searchText;
      setSearchText(allSearchText);
    }
  };

  useEffect(() => {
    let timerId;
    timerId = setTimeout(searchDestination, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);

  return {
    searchText,
    destinations,
    handleSearchTextChange,
    setSearchText,
    handleSearchTextTag,
  };
}

export default useSearchTravel;
