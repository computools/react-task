import { FlameIcon, HeartIcon, RepoIcon } from "@primer/octicons-react";
import React from "react";
import "./developer-card.styles.scss";

export const DeveloperCard = () => {
  return (
    <div className="developer-card p-3 border-top d-flex">
      <a href="#" className="text-secondary developer-card__index-link fs-7">
        1
      </a>
      <a href="#" className="mx-3">
        <img
          src="https://avatars.githubusercontent.com/u/3797675?s=96&v=4"
          className="rounded-circle developer-card__avatar"
        />
      </a>
      <div className="d-sm-flex flex-auto">
        <div className="col-sm-8 d-md-flex">
          <div className="col-md-6">
            <a href="#" className="d-block fs-5 fw-semibold">
              Stefan Prodan
            </a>
            <a
              href="#"
              className="d-block text-secondary developer-card__nick-link"
            >
              stefanprodan
            </a>
          </div>
          <div className="col-md-6">
            <div className="text-uppercase fs-7 text-secondary">
              <FlameIcon size={16} className="text-orange" /> Popular repo
            </div>
            <a href="#">
              <RepoIcon size={16} className="text-secondary me-1" />{" "}
              <span className="fw-semibold">dockprom</span>
            </a>
            <div className="text-secondary fs-7">
              Docker hosts and containers monitoring with Prometheus, Grafana,
              cAdvisor, NodeExporter and AlertManager
            </div>
          </div>
        </div>
        <div className="col-sm-4 d-flex justify-content-end gap-2">
          <div>
            <button className="btn btn-secondary btn-sm float-end px-3 developer-card__sponsor-btn">
              <HeartIcon
                size={16}
                className="text-sponsors developer-card__sponsor-icon"
              />{" "}
              Sponsor
            </button>
          </div>
          <div>
            <button className="btn btn-secondary btn-sm float-end px-3">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
