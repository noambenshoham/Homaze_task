import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import "./styles/App.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  projectData,
  projectsSliceState,
  setProjects,
} from "./Redux/projects-slice";
import { selectProjects } from "./Redux/Store";
import ContractCard from "./components/ContractCard";
const App: React.FC = () => {
  const dispatch = useDispatch();
  const projects: projectsSliceState = useSelector(selectProjects);

  const [input, setInput] = useState("");
  let projectToRender;

  if (input.length >= 2) {
    projectToRender = projects.data
      .filter(
        (project) =>
          project.customerName
            .toLowerCase()
            .includes(input.toLocaleLowerCase()) ||
          project.address.toLowerCase().includes(input.toLocaleLowerCase())
      )
      .map((project) => (
        <div key={project.projectId}>{<ContractCard {...project} />}</div>
      ));
  } else {
    projectToRender = projects.data.map((project) => (
      <div key={project.projectId}>{<ContractCard {...project} />}</div>
    ));
  }

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
  });

  return (
    <div className="App">
      <div className="app-container">
        <div className="header">Contracts</div>
        <div className="main">
          <SearchBar input={input} setInput={setInput} />
          <div className="contracts-container">{projectToRender}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
