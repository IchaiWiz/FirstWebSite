import React from "react";
import "./App.css";
import Cv from "./pages/CV/Cv";
import { Routes, Route } from "react-router-dom";
import PageError from "./pages/PageError/PageError";
import Blog from "./pages/Blog/Blog";
import UseEffectCompo from "./pages/UseEffectCompo/UseEffectCompo";
import Acceuil from "./pages/Acceuil/Acceuil";
import Counter from "./components/Counter/Counter";
import Toogle from "./components/Toogle/Toogle";
import Metier from "./components/Metier/Metier";
import List from "./components/List/List";
import GameCatchMe from "./pages/GameCatchMe/GameCatchMe";
import GameCatchMeAcceuil from "./pages/GameCatchMeAcceuil/GameCatchMeAcceuil";
import CountIntervalCompo from "./components/CountIntervalCompo/CountIntervalCompo";
import TTT from "./pages/TTT/TTT";

function App() {
  return (
    <Routes>
      <Route index element={<Acceuil />} />
      <Route path="/Counter" element={<Counter />} />
      <Route path="/Toogle" element={<Toogle />} />
      <Route path="/Metier" element={<Metier />} />
      <Route path="/List" element={<List />} />
      <Route path="/useEffectCompo" element={<UseEffectCompo />} />
      <Route path="/CountIntervalCompo" element={<CountIntervalCompo />} />
      <Route path="/home" element={<Cv />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/GameCatchMe" element={<GameCatchMe />} />
      <Route path="/GameCatchMeAcceuil" element={<GameCatchMeAcceuil />} />
      <Route path="/TTTGame" element={<TTT />} />
      <Route path="*" element={<PageError/>} />
    </Routes>
  );
}

export default App;
