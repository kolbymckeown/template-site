import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import TwoImages from "./components/TwoImages";
import BestSellers from "./components/BestSellers";
import Banner from "./components/Banner";
import SingleItem from "./components/SingleItem";
import NewArrivals from "./components/NewArrivals";
import SingleItem2 from "./components/SingleItem2";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div>
      <Div>
        <Header />
      </Div>
      <TwoImages />
      <BestSellers />
      <Banner />
      <SingleItem />
      <NewArrivals />
      <SingleItem2 />
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default App;

const Div = styled.div`
  position: sticky;
  top: -50px;
  background-color: white;
`;
