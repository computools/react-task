import {
  LocationIcon,
  RepoForkedIcon,
  RepoIcon,
  StarIcon,
} from "@primer/octicons-react";
import React from "react";
import ReactTooltip from "react-tooltip";
import "./repo-card.styles.scss";

export const RepoCard = () => {
  return (
    <div className="repo-card p-3 border-top">
      <a href="#" className="repo-card__link">
        <RepoIcon size={16} className="text-secondary" />{" "}
        <span className="fs-4 repo-card__link-content">peng-zhihui / Peak</span>
      </a>
      <button className="btn btn-secondary btn-sm float-end px-3">
        <StarIcon size={16} className="text-secondary" /> Star
      </button>
      <p className="text-secondary fs-8">Tiny Mobile Terminal Device Kit.</p>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-3">
          <div className="text-secondary fs-7">C</div>
          <div className="text-secondary fs-7">
            <a href="#" className="text-secondary repo-card__stats-link">
              <StarIcon size={16} /> 582
            </a>
          </div>
          <div className="text-secondary fs-7">
            <a href="#" className="text-secondary repo-card__stats-link">
              <RepoForkedIcon size={16} /> 80
            </a>
          </div>
          <div className="text-secondary fs-7">
            Built by
            <a href="#" data-tip data-for="some-guy-id">
              <img
                className="repo-card__avatar rounded-circle ms-1"
                src="https://avatars.githubusercontent.com/u/12994887?s=40&v=4"
              />
            </a>
            <ReactTooltip
              id="some-guy-id"
              delayHide={300}
              effect="solid"
              clickable
              className="repo-card__tooltip"
            >
              <div className="alert alert-warning text-primary rounded-0 px-2 py-2">
                💭 万坑之源，会努力更新项目的，谢谢关注🙆🏻‍♂️
              </div>
              <div className="px-3 pb-3 d-flex">
                <img
                  className="repo-card__avatar--big rounded-circle me-3"
                  src="https://avatars.githubusercontent.com/u/12994887?s=120&v=4"
                />
                <div>
                  <div>
                    <a
                      href="#"
                      className="text-primary fw-bold repo-card__stats-link"
                    >
                      稚晖
                    </a>{" "}
                    <a
                      href="#"
                      className="text-secondary repo-card__stats-link"
                    >
                      peng-zhihui
                    </a>
                  </div>
                  <div className="mt-2 text-primary">野生钢铁侠本侠。</div>
                  <div className="mt-2 text-secondary">
                    <LocationIcon size={16} /> Shanghai
                  </div>
                </div>
              </div>
            </ReactTooltip>
          </div>
        </div>
        <div className="text-secondary fs-7">
          <StarIcon size={16} /> 82 stars today
        </div>
      </div>
    </div>
  );
};
