import React, { useEffect, useRef, useState } from "react";

import "../shared/css/RestaurantList.css";
import { RestaurantProps } from "./Restaurant";

type RestaurantListProp = {
  state: string;
  restaurants: RestaurantProps[];
};

export const RestaurantList = (props: RestaurantListProp) => {
  const listContainerRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (listContainerRef.current) {
      if (toggle) {
        // const height = (props.restaurants.length - 1) * 55 + 73;
        // listContainerRef.current.style.height = `${height.toString()}px`;
        listContainerRef.current.style.height = "auto";
        listContainerRef.current.classList.add('show');

      } else {
        listContainerRef.current.classList.remove('show');
        listContainerRef.current.style.height = "43px";
      }
    }
  }, [toggle]);

  // useEffect(() => {
  //   const setContainerHeight = () => {
  //     if (listContainerRef.current) {
  //       const height = toggle ? (props.restaurants.length - 1) * 55 + 73 : 43;
  //       listContainerRef.current.style.height = `${height}px`;
  //     }
  //   };

  //   setContainerHeight();
  // }, [toggle, props.restaurants.length]);

  return (
    <div className="restaurant-list">
      <div className="header">
        <div className="header-content-1">
          <span className="icon glyphicon glyphicon-map-marker"></span>
          <span className="state">{props.state}</span>
        </div>
        <div className="header-content-2">
          <span className="test">{props.restaurants.length}</span>
        </div>
      </div>
      <div className="content" ref={listContainerRef}>
        {toggle &&
          props.restaurants.map((restaurant, i) => (
            <div className="list" key={i}>
              <span className="list-name">{restaurant.restaurant_name}</span>
              <div className="list-review">
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
              </div>
            </div>
          ))}
        <div className="action">
          <button
            className="btn btn-light btn-lg"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? 'hide' : 'view more'}
          </button>
        </div>
      </div>
    </div>
  );
};
