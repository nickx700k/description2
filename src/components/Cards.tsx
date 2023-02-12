import React, { useState } from "react";
import "./Cards.scss";

export default function Cards() {
  const [show, setShow] = useState(true);
  const btnToggle = () => {
    setShow((prevState) => !prevState);
  };

  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia nesciunt omnis rerum dignissimos";

  return (
    <div className="Cards">
      <div className="showForm">
        <div className="flex">
          <div className="showForm--Top" onClick={btnToggle}>
            <div className="flex2">
              <h3 className="showForm--Top-h3">Description</h3>
              {show ? (
                <span className="showForm--Top-show">&#8964;</span>
              ) : (
                <span className="showForm--Top-hide">&#8963;</span>
              )}
            </div>
          </div>
          {show ? (
            <div className="showForm--Middle"></div>
          ) : (
            <div className="showForm--Middle">
              <div className="flex">
                <ul className="showForm--Middle-ul"></ul>

                <p className="showForm--Middle-p">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas
                  officiis minus tempora voluptatibus eveniet libero temporibus,
                  consequatur distinctio porro ipsum doloremque iure
                </p>
                <ul className="showForm--Middle-ul">
                  <li>
                    <p>{desc}</p>
                  </li>
                  <li>
                    <p>{desc}</p>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
