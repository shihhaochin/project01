import React from "react";
import Homepage from "./pages/homepage";
import FirstPage from "./pages/firstPage";
import SecondPage from "./pages/secondPage";
import ThirdPage from "./pages/thirdPage";
import FourthPage from "./pages/fourthPage";
import Footer from "./pages/footer";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Homepage />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </div>
  );
}

export default App;
