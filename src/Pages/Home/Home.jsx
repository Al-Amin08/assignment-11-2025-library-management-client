import React, { useEffect } from "react";
import Banner from "./Banner";
import BookCategories from "./BookCategories";
import Sponsor from "./Sponsor";
import Subscribe from "./Subscribe";

const Home = () => {
  useEffect(() => {
    document.title = "ReadVault";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <BookCategories></BookCategories>
      <Sponsor></Sponsor>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
