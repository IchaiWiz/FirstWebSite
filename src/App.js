import React from "react";
import "./App.css";
import Cv from "./pages/CV/Cv";
import { Routes, Route } from "react-router-dom";
import PageError from "./pages/PageError/PageError";
import Blog from "./pages/Blog/Articles/UseEffectBlog";
import UseEffectCompo from "./pages/UseEffectCompo/UseEffectCompo";
import Acceuil from "./pages/Acceuil/Acceuil";
import Counter from "./components/Features/Counter/Counter";
import Toogle from "./components/Features/Toogle/Toogle";
import Metier from "./components/Features/Metier/Metier";
import List from "./components/Features/List/List";
import MouseMove from "./components/Features/MouseMove/MouseMove";
import StyleReact from "./componentsCours/Style&TestSection/StyleReact";
import Test from "./componentsCours/Style&TestSection/Test";
import PresUseEffect from "./componentsCours/UseEffectSection/PresUseEffect";
import UefVide from "./componentsCours/UseEffectSection/UefVide";
import UseEffectDependance from "./componentsCours/UseEffectSection/UseEffectDependance";
import UseEffectReturn from "./componentsCours/UseEffectSection/UseEffectReturn";
import PresUseState from "./componentsCours/Style&TestSection/StyleReact";
import UseStateList from "./componentsCours/UseStatesSection/UseStateList";
import UseStateNumber from "./componentsCours/UseStatesSection/UseStateNumber";
import UseStateObject from "./componentsCours/UseStatesSection/UseStateObject";
import UseStateToogle from "./componentsCours/UseStatesSection/UseStateToogle";
import GameCatchMe from "./pages/GameCatchMe/GameCatchMe";
import GameCatchMeAcceuil from "./pages/GameCatchMeAcceuil/GameCatchMeAcceuil";
import CountIntervalCompo from "./components/Features/CountIntervalCompo/CountIntervalCompo";
import TTT from "./pages/TTT/TTT";
import TTTComputer from "./pages/TTTComputer/TTTComputer";
import HelpPage from "./pages/HelpPage/HelpPage";
import Login from "./components/Login/Login";
import BlogManagement from "./pages/Blog/BlogManagement/BlogManagement";
import ProjectFilter from "./pages/ProjectFilter/ProjectFilter";
import Calculus from "./components/Features/UseReducer/Calculus";
import { AuthProvider } from "./components/Authentification/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Acceuil />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Toogle" element={<Toogle />} />
        <Route path="/Metier" element={<Metier />} />
        <Route path="/List" element={<List />} />
        <Route path="/useEffectCompo" element={<UseEffectCompo />} />
        <Route path="/CountIntervalCompo" element={<CountIntervalCompo />} />
        <Route path="/StyleReact" element={<StyleReact />} />
        <Route path="/TestReact" element={<Test/>} />
        <Route path="/PresUseEffect" element={<PresUseEffect />} />
        <Route path="/UefVide" element={<UefVide />} />
        <Route path="/UseEffectDependance" element={<UseEffectDependance />} />
        <Route path="/UseEffectReturn" element={<UseEffectReturn />} />
        <Route path="/PresUseState" element={<PresUseState />} />
        <Route path="/UseStateList" element={<UseStateList />} />
        <Route path="/UseStateNumber" element={<UseStateNumber />} />
        <Route path="/UseStateObject" element={<UseStateObject />} />
        <Route path="/UseStateToogle" element={<UseStateToogle />} />
        <Route path="/MouseMove" element={<MouseMove />} />
        <Route path="/home" element={<Cv />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/GameCatchMe" element={<GameCatchMe />} />
        <Route path="/GameCatchMeAcceuil" element={<GameCatchMeAcceuil />} />
        <Route path="/TTTGame" element={<TTT />} />
        <Route path="/TTTGameAgainstComputer" element={<TTTComputer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projectfilter" element={<ProjectFilter />} />
        <Route path="/BlogManagement" element={<BlogManagement />} />
        <Route path="/HelpPage" element={<HelpPage />} />
        <Route path="/Calculus" element={<Calculus />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
