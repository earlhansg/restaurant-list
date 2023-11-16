import React, { useEffect, useRef, useState } from "react";
// style
import "../shared/css/RestaurantList.css";
// types
import { RestaurantListProp } from "../shared/types/RestaurantListProp";

export const RestaurantList = (props: RestaurantListProp) => {
  const listContainerRef = useRef<HTMLDivElement>(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const setContainerHeight = () => {
      const containerRef = listContainerRef.current;
  
      if (containerRef) {
        const baseHeight = 43;
        const additionalHeight = (props.restaurants.length - 1) * 55 + 73;
        const height = toggle ? additionalHeight : baseHeight;
  
        containerRef.style.maxHeight = `${Math.max(height, baseHeight)}px`;
      }
    };
  
    setContainerHeight();
  }, [toggle, props.restaurants.length]);  

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
