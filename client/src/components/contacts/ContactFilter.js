import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const text = useRef();

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <div className="form-group">
        <input
          ref={text}
          type="text"
          placeholder="Filter Contacts..."
          onChange={onChange}
          className="form-control"
        />
      </div>
    </form>
  );
};

export default ContactFilter;
