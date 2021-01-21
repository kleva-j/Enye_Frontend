import React, { useContext } from "react";
import { motion } from "framer-motion";

import { AppContext } from "../context/AppContext";

import "./card.scss";

const maleProfilePlaceholder =
  "https://st3.depositphotos.com/4111759/13425/v/1600/depositphotos_134255532-stock-illustration-profile-placeholder-male-default-profile.jpg";

const femaleProfilePlaceholder =
  "https://st3.depositphotos.com/9998432/13335/v/1600/depositphotos_133351964-stock-illustration-default-placeholder-woman.jpg";

export const Card = ({ FirstName, LastName, Gender, ...rest }) => {
  const { handleContent } = useContext(AppContext);
  const imgUrl =
    Gender === "Male"
      ? maleProfilePlaceholder
      : Gender === "Female"
      ? femaleProfilePlaceholder
      : maleProfilePlaceholder;

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="card"
      title={`${FirstName} ${LastName}`}
      onClick={() =>
        handleContent({ imgUrl, FirstName, LastName, Gender, ...rest })
      }
    >
      <p>{FirstName + " " + LastName}</p>
      <div className="img_container">
        <img src={imgUrl} alt="" />
      </div>
      <div className="go-corner" href="#">
        <div className="go-arrow">→</div>
      </div>
      <div className="view_details">
        <button>View Details</button>
      </div>
    </motion.li>
  );
};
