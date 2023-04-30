import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/NavBar/Navbar";
import SectionPresentation from "../../components/sectionPresentation/SectionPresentation";
import Main from "../../components/Main/Main";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";

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
