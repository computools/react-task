import React from "react";
import { useHttpRepositories } from "../../api/use-http-repositories";
import { Loader } from "../loader/loader.component";
import { RepoCard } from "../repo-card/repo-card.component";
import { SearchDropdown } from "../search-dropdown/search-dropdown.component";
import { TrendNavigation } from "../trend-navigation/trend-navigation.component";

export const RepositoriesList = () => {
  const { isLoading, error, data } = useHttpRepositories();

  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between align-items-center">
        <TrendNavigation />
        {!isLoading && !error && (
          <div className="d-flex gap-3">
            <SearchDropdown />
            <SearchDropdown />
            <SearchDropdown />
          </div>
        )}
      </div>
      <div className="card-body p-0">
        {isLoading && <Loader />}
        {error && (
          <div className="alert alert-danger text-primary m-5" role="alert">
            A simple danger alert—check it out!
          </div>
        )}
        {data?.map((repo) => (
          <RepoCard repository={repo} key={`repo-rank-${repo.rank}`} />
        ))}
      </div>
    </div>
  );
};
