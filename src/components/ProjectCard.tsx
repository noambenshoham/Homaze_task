import React, { PropsWithChildren } from "react";
import { projectData } from "../Redux/projects-slice";
import "../styles/ContractCard.scss";
const ProjectCard: React.FC<projectData> = (props) => {
  let date = new Date(props.updated_timestmp);
  let dateString = `${date.getMonth()}.${date.getDay()}.${date.getFullYear()}`;

  return (
    <div className="contract">
      <div className="contract-header">
        <div className="customerName">{props.customerName || "Untitled"}</div>
        <div className="projectId">ID: {props.projectId}</div>
      </div>
      <div className="contract-main">
        <div className="address">{props.address}</div>
        <div className="rooms">
          {props.rooms.map((room, index) => (
            <div key={index} className="room">
              {room.name}
            </div>
          ))}
        </div>
        <div className="details">
          <Detail text="Last updated">
            <div className="last-update">{dateString}</div>
          </Detail>
          <Detail text="Total">
            <div className="total">
              $
              {props.totalProject.toLocaleString("en-US", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </div>
          </Detail>
          <Detail text="Stage">
            <div
              className={
                "stage " + props.projectState.toLowerCase().replaceAll(" ", "-")
              }
            >
              {props.projectState}
            </div>
          </Detail>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

function Detail(props: { text: string } & PropsWithChildren) {
  return (
    <div className="detail-title">
      <div style={{ color: "#9F9F9F" }}>{props.text}</div>
      {props.children}
    </div>
  );
}
