import "./App.css";
import { StoreProvider } from "./store/StoreProvider";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    (async () => {
      try{
        axios.get("") 

      }catch(){
        
      }
    })();
  }, []);
  return <div className='App'></div>;
}

export default App;
