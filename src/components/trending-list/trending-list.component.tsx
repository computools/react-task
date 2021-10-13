import React from "react";
import { RepoCard } from "../repo-card/repo-card.component";
import { SearchDropdown } from "../search-dropdown/search-dropdown.component";
import { TrendNavigation } from "../trend-navigation/trend-navigation.component";

export const TrendingList = () => {
  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between align-items-center">
        <TrendNavigation />
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
