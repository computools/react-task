import React from "react";
import { useHttpDevelopers } from "../../api/use-http-developers";
import { DeveloperCard } from "../developer-card/developer-card.component";
import { Loader } from "../loader/loader.component";
import { SearchDropdown } from "../search-dropdown/search-dropdown.component";
import { TrendNavigation } from "../trend-navigation/trend-navigation.component";

export const DevelopersList = () => {
  const { isLoading, error, data } = useHttpDevelopers();

  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between align-items-center">
        <TrendNavigation />
        <div className="d-flex gap-3">
          {/* <SearchDropdown />
          <SearchDropdown /> */}
        </div>
      </div>
      <div className="card-body p-0">
        {isLoading && <Loader />}
        {error && (
          <div className="alert alert-danger text-primary m-5" role="alert">
            A simple danger alert—check it out!
          </div>
        )}
        {data?.map((dev) => (
          <DeveloperCard developer={dev} key={`dev-rank-${dev.rank}`} />
        ))}
      </div>
    </div>
  );
};
