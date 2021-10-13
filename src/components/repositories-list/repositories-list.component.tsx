import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useHttpRepositories } from "../../api/use-http-repositories";
import { SpokenLanguage, spokenLanguages } from "../../data/spoken-languages";
import { Loader } from "../loader/loader.component";
import { RepoCard } from "../repo-card/repo-card.component";
import { SearchDropdown } from "../search-dropdown/search-dropdown.component";
import { TrendNavigation } from "../trend-navigation/trend-navigation.component";

export const RepositoriesList = () => {
  const history = useHistory();

  const [spokenLanguage, setSpokenLanguage] = useState<SpokenLanguage | null>(
    (() => {
      const params = new URLSearchParams(history.location.search);
      const language = params.get("spoken_language");
      const value = spokenLanguages.find((v) => v.option === language);

      return value || null;
    })()
  );
  const { isLoading, error, data } = useHttpRepositories({
    spokenLanguage: spokenLanguage?.option || null,
  });
  const assignSpokenLanguage = (lang: SpokenLanguage | null) => {
    setSpokenLanguage(lang);

    const searchParams = new URLSearchParams(history.location.search);
    if (searchParams.has("spoken_language") && !lang) {
      searchParams.delete("spoken_language");
    } else if (searchParams.has("spoken_language") && lang) {
      searchParams.set("spoken_language", lang.option);
    } else {
      searchParams.append("spoken_language", lang!.option);
    }

    history.push({ search: searchParams.toString() });
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
