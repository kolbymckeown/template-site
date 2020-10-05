import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import SplitBanner from "./components/SplitBanner";
import BestSellers from "./components/BestSellers";
import Banner from "./components/Banner";
import ImageCaption from "./components/ImageCaption";
import NewArrivals from "./components/NewArrivals";
import ImageCaption2 from "./components/ImageCaption2";
import Footer from "./components/Footer";
import GlobalStyles from "./components/GlobalStyles";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Div>
          <Header />
        </Div>
        <SplitBanner />
        <BestSellers />
        <Banner />
        <ImageCaption />
        <NewArrivals />
        <ImageCaption2 />
        <Footer />
        <GlobalStyles />
      </div>
    </ThemeProvider>
  );
}

export default App;

const Div = styled.div`
  position: sticky;
  top: -50px;
  background-color: white;
  z-index: 1000;
`;
