import SearchBar from "./SearchBar";
import MusicTable from "./MusicTable";
import NavigationBar from "./NavigationBar";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  let [music, setMusic] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/songs/")
      .then((response) => {
        setMusic(response.data);
      })
      .then((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="App ">
      <NavigationBar />
      <SearchBar />
      <MusicTable music={music} setMusic={setMusic} />
    </div>
  );
}

export default App;
