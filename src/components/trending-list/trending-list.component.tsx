import React from "react";
import { RepoCard } from "../repo-card/repo-card.component";
import { SearchDropdown } from "../search-dropdown/search-dropdown.component";

export const TrendingList = () => {
  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="btn-group btn-group-sm" role="group">
          <a href="#" className="btn btn-primary border-end-0 px-3">
            Repositories
          </a>
          <a href="#" className="btn btn-outline-secondary border-start-0 px-3">
            Developers
          </a>
        </div>
        <div className="d-flex gap-3">
          <SearchDropdown />
          <SearchDropdown />
          <SearchDropdown />
        </div>
      </div>
      <div className="card-body p-0">
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </div>
    </div>
  );
};
