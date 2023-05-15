import React from "react";
import BaseCard from "./BaseCard";

const NobelPrizesDetail = ({ categoryFullName, awardYear, laureates }) => {
  return (
    <div>
      <h3 className="my-4">
        <b>
          {categoryFullName}
          {awardYear}
        </b>
      </h3>
      {laureates?.map((laureate) => {
        return (
          <div key={laureate.id}>
            <BaseCard laureate={laureate} />
          </div>
        );
      })}
    </div>
  );
};

export default NobelPrizesDetail;
