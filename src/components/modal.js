import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "react-feather";

import { AppContext } from "../context/AppContext";

import "./modal.scss";

export const Modal = () => {
  const { modalIsVisible, modalContent, handleContent } = useContext(
    AppContext
  );

  if (modalIsVisible) {
    const {
      imgUrl,
      FirstName,
      LastName,
      CreditCardNumber,
      CreditCardType,
      DomainName,
      Email,
      Gender,
      LastLogin,
      Latitude,
      Longitude,
      MacAddress,
      PaymentMethod,
      PhoneNumber,
      UserName,
    } = modalContent;
    return createPortal(
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal_container"
      >
        <aside className="modal_header">
          <X
            size={16}
            color="grey"
            onClick={handleContent}
            className="close"
            title="close"
          />
        </aside>
        <aside className="modal_body">
          <main>
            <div className="img_container">
              <img src={imgUrl} alt="" />
            </div>
            <div className="details">
              <div className="details m-2">
                <span>Firstname: </span>
                <strong>{FirstName}</strong>
              </div>
              <div className="details">
                <span>Lastname: </span>
                <strong>{LastName}</strong>
              </div>
            </div>

            <div className="details">
              <div className="details m-2">
                <span>Longitude: </span>
                <strong>{Longitude}</strong>
              </div>
              <div className="details">
                <span>Latitude: </span>
                <strong>{Latitude}</strong>
              </div>
            </div>

            <div className="details">
              <div className="details m-2">
                <span>Gender: </span>
                <strong>{Gender}</strong>
              </div>

              <div className="details">
                <span>Username: </span>
                <strong>{UserName}</strong>
              </div>
            </div>
          </main>

          <main>
            <div className="details">
              <span>Phone Number: </span>
              <strong>{PhoneNumber}</strong>
            </div>
            <div className="details">
              <span>Domain Name: </span>
              <strong>{DomainName}</strong>
            </div>
            <div className="details">
              <span>Email: </span>
              <strong>{Email}</strong>
            </div>
            <div className="details">
              <span>Payment Method: </span>
              <strong>{PaymentMethod}</strong>
            </div>
            <div className="details">
              <span>MacAddress: </span>
              <strong>{MacAddress}</strong>
            </div>
            <div className="details">
              <span>CreditCard Type: </span>
              <strong>{CreditCardType}</strong>
            </div>
            <div className="details">
              <span>CreditCard Number: </span>
              <strong>{CreditCardNumber}</strong>
            </div>
            <div className="details">
              <span>Last Login: </span>
              <strong>{LastLogin}</strong>
            </div>
          </main>
        </aside>
      </motion.section>,
      document.querySelector("#modal_ref")
    );
  } else return <></>;
};
