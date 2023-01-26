import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  projectData,
  projectsSliceState,
  setProjects,
} from "./Redux/projects-slice";
import { selectProjects } from "./Redux/Store";
import ProjectCard from "./components/ProjectCard";
const App: React.FC = () => {
  const dispatch = useDispatch();
  const projects: projectsSliceState = useSelector(selectProjects);

  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(
        `https://63d23c0906556a0fdd376b3c.mockapi.io/projects`
      );
      let data: projectData[] = await res.json();
      data
        .sort((x, y) => {
          return new Date(String(x.updated_timestmp)) <
            new Date(String(y.updated_timestmp))
            ? 1
            : -1;
        })
        .reverse();
      dispatch(setProjects({ data: data }));
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="App">
      <div className="Header">Contracts</div>
      <div className="main">
        <SearchBar input={input} setInput={setInput} />
        <div className="projects-box">
          {projects.data.map((project) => (
            <div key={project.projectId}>{<ProjectCard {...project} />}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
