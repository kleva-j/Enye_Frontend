import React from "react";

import { SkeletonCard } from "./skeleton/skeleton";
import { Card } from "./card";

import "./cardContainer.scss";

export const CardContainer = ({ list, loading }) => {
  return (
    <ul>
      {list.map((user, index) => (
        <Card key={index} {...user} />
      ))}
      {loading &&
        Array.from({ length: 20 }, (_, i) => i).map((key) => (
          <SkeletonCard key={key} theme="light" />
        ))}
    </ul>
  );
};
