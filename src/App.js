import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import  { createGlobalStyle } from "styled-components";

const App = () => {
  const { isLight } = useSelector(({ ui }) => ui);
  const GlobalStyles = createGlobalStyle`
  body{
    background-color:${isLight ? "#000" : "#fff"};
  }
  button{
    color:${isLight ? "#000" : "#fff"};
  }
  table {
    color:${isLight ? "#212529" : "#000"};
  }
  h1{
    color:${isLight ? "#fff" : "#000"};
  }
  td{
    color:${isLight ? "text-black" : "#000"};
  }
  th{
    color:${isLight ? "text-black" : "#000"};
  }
  `;
  return (
    // <div className="App">
    <div className="App">
      <Navbar />
      <GlobalStyles />
      <Home />
      
    </div>
  );
}

export default App;
