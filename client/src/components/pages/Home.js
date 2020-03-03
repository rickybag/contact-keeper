import React from "react";

import ContactForm from "../contacts/ContactForm";
import Contacts from "../contacts/Contacts";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  return (
    <div className="home">
      <div>
        <ContactForm />
      </div>
      <div className="contacts">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
