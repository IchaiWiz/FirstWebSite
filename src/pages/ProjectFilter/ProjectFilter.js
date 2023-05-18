import React, { useState, useEffect } from "react";
import NavBarAcceuil from "../../components/NavBarAcceuil/NavBarAcceuil";
import imgprj1 from "../../../src/assets/RobotGentil.jpeg";
import imgprj2 from "../../../src/assets/RobotFlippant.jpeg";
import imgprj3 from "../../../src/assets/Robotbb.jpeg"; 
import imgprj4 from "../../../src/assets/Robottop.jpeg";
import { Link } from "react-router-dom";

const ProjectFilter = () => {
  const [filters, setFilters] = useState({ HTML: false, JS: false, React: false });
  const [projects, setProjects] = useState([
    { id: 1, tech: "JS", title: "Catch Me !", image: imgprj1, link: "/GameCatchMeAcceuil", visible: true },
    { id: 2, tech: "React", title: "Mon Blog", image: imgprj2, link: "/blog", visible: true },
    { id: 3, tech: "HTML", title: "Mon CV", image: imgprj3, link: "/home", visible: true },
    { id: 4, tech: "React", title: "Tick Tac Toe", image: imgprj4, link: "/TTTGame", visible: true },
  ]);

  useEffect(() => {
    const activeFilters = Object.keys(filters).filter(key => filters[key]);
    if (activeFilters.length > 0) {
      setProjects(prevProjects => prevProjects.map(project => ({ ...project, visible: activeFilters.includes(project.tech) })));
    } else {
      setProjects(prevProjects => prevProjects.map(project => ({ ...project, visible: true })));
    }
  }, [filters]);

  const handleFilterChange = tech => setFilters({ ...filters, [tech]: !filters[tech] });

  return (
    <div className="all-acceuil">
      <NavBarAcceuil filters={filters} handleFilterChange={handleFilterChange} />
      <div className="containerStyle">
        {projects.filter(project => project.visible).map(project => (
          <div key={project.id} className="cardStyle">
            <div className="titleContainerStyle">
              <h2 className="titleStyle">{project.title}</h2>
            </div>
            <Link to={project.link}>
              {" "}
              <img src={project.image} alt={project.title} className="imageStyle" />{" "}
            </Link>
            <Link to={project.link} className="linkStyle">
              {project.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
