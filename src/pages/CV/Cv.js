import React from "react";
import Header from "../../componentsCV/Header/Header";
import Navbar from "../../componentsCV/NavBar/Navbar";
import SectionPresentation from "../../componentsCV/sectionPresentation/SectionPresentation";
import Main from "../../componentsCV/Main/Main";
import { useState } from "react";
import Footer from "../../componentsCV/Footer/Footer";

const Cv = () => {
  const [name, setName] = useState("Ichai Wizman");

  const HandleName = (cb) => {
    setName(cb);
  };

  return (
    <div className="CV">
      <header>
        <Header name={name} />

        <Navbar />
      </header>

      <SectionPresentation />

      <Main HandleName={HandleName} />

      <Footer name={name} />
    </div>
  );
};

export default Cv;
