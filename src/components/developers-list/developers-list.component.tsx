import React from "react";
import { DeveloperCard } from "../developer-card/developer-card.component";
import { SearchDropdown } from "../search-dropdown/search-dropdown.component";
import { TrendNavigation } from "../trend-navigation/trend-navigation.component";

export const DevelopersList = () => {
  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between align-items-center">
        <TrendNavigation />
        <div className="d-flex gap-3">
          <SearchDropdown />
          <SearchDropdown />
        </div>
      </div>
      <div className="card-body p-0">
        <DeveloperCard />
        <DeveloperCard />
        <DeveloperCard />
        <DeveloperCard />
        <DeveloperCard />
      </div>
    </div>
  );
};
