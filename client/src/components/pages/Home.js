import React from "react";
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className="home">
      <div>{/* ContactForm */}</div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
