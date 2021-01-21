import React from 'react';

import './skeleton.scss'

const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;

  return (
    <div className={classes}></div>
  );
};

export const SkeletonCard = ({ theme }) => {
  const themeClass = theme || 'light'

  return (
    <li className={`skeleton_card ${themeClass}`}>
      <SkeletonElement type="text" />
      <SkeletonElement type="avatar" />
    </li>
  )
};
