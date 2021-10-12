import { TriangleDownIcon } from "@primer/octicons-react";
import clsx from "clsx";
import React, { useState } from "react";
import { FixedSizeList } from "react-window";
import { spokenLanguages } from "../../data/spoken-languages";
import "./search-dropdown.styles.scss";

export const SearchDropdown = () => {
  const [isOpened, setIsOpened] = useState(false);
  const dropdownClasses = clsx(
    "list-group",
    "search-dropdown",
    "position-absolute",
    "end-0",
    "rounded-bottom",
    {
      invisible: !isOpened,
      "d-none": !isOpened,
    }
  );
  const selectorClasses = clsx("fs-8", "search-dropdown__selector", {
    "search-dropdown__selector--active": isOpened,
  });
  const toggleDropdown = () => {
    setIsOpened((v) => !v);
  };

  return (
    <div className="search-dropdown__wrapper position-relative">
      <span onClick={toggleDropdown} role="button" className={selectorClasses}>
        Spoken Language: <strong>Any</strong> <TriangleDownIcon size={14} />
      </span>
      <div className={dropdownClasses}>
        <div className="list-group-item fw-bold fs-7">
          Select a spoken language
        </div>
        <div className="list-group-item">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Username"
          />
        </div>
        <div className="search-dropdown__list-wrapper">
          <FixedSizeList
            height={400}
            itemData={spokenLanguages}
            itemCount={spokenLanguages.length}
            itemSize={35}
            width={300}
            className="rounded-bottom"
          >
            {({ index, style, data }) => (
              <button
                className="list-group-item list-group-item-action fs-7 text-start border-start-0 border-end-0"
                key={`language-${data[index].urlParam}`}
                style={style}
              >
                {data[index].name}
              </button>
            )}
          </FixedSizeList>
        </div>
      </div>
    </div>
  );
};
