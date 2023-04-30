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
import ProjetN1 from "./pages/ProjetN1/ProjetN1";
import Game from "./pages/Game/Game";
import GameAcceuil from "./pages/GameAcceuil/GameAcceuil";
function App() {
  return (
    <Routes>
      <Route index element={<Acceuil />} />
      <Route path="/Counter" element={<Counter />} />
      <Route path="/Toogle" element={<Toogle />} />
      <Route path="/Metier" element={<Metier />} />
      <Route path="/List" element={<List />} />
      <Route path="/useEffectCompo" element={<UseEffectCompo />} />
      <Route path="/home" element={<Cv />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/ProjetN1" element={<ProjetN1 />} />
      <Route path="/Game" element={<Game />} />
      <Route path="/GameAcceuil" element={<GameAcceuil />} />
      <Route path="*" element={<PageError/>} />
    </Routes>
  );
}

export default App;
