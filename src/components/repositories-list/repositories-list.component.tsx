import React, { useState } from "react";
import { useHttpRepositories } from "../../api/use-http-repositories";
import { SpokenLanguage, spokenLanguages } from "../../data/spoken-languages";
import { Loader } from "../loader/loader.component";
import { RepoCard } from "../repo-card/repo-card.component";
import { SearchDropdown } from "../search-dropdown/search-dropdown.component";
import { TrendNavigation } from "../trend-navigation/trend-navigation.component";

export const RepositoriesList = () => {
  const { isLoading, error, data } = useHttpRepositories();
  const [spokenLanguage, setSpokenLanguage] = useState<SpokenLanguage | null>(
    null
  );
  const assignSpokenLanguage = (lang: SpokenLanguage | null) => {
    setSpokenLanguage(lang);
  };

  return (
    <div className="card mb-5">
      <div className="card-header d-flex justify-content-between align-items-center">
        <TrendNavigation />
        {!isLoading && !error && (
          <div className="d-flex gap-3">
            <SearchDropdown
              title="Spoken Language"
              selectedValue={spokenLanguage}
              callToActionText="Select a spoken language"
              searchPlaceholder="Filter spoken languages"
              listData={spokenLanguages}
              setValue={assignSpokenLanguage}
              cleanValueText="Clear spoken language"
            />
            {/* <SearchDropdown />
            <SearchDropdown /> */}
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
        {data?.length === 0 && (
          <h1>
            It looks like we don’t have any trending repositories for your
            choices.
          </h1>
        )}
        {data?.map((repo) => (
          <RepoCard repository={repo} key={`repo-rank-${repo.rank}`} />
        ))}
      </div>
    </div>
  );
};
