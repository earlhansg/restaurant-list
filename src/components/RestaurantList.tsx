import React from 'react'

import '../shared/css/RestaurantList.css'

export const RestaurantList = () => {
  return (
    <div className='restaurant-list'>
        <div className="header">
            <div className='header-content-1'>
                <span className="icon glyphicon glyphicon-glass"></span>
                <span className="state">Georgia</span>
            </div>
            <div className='header-content-2'>
                <span className="test">3</span>
            </div>
        </div>
        <div className="content">
          <div className="list">
              <span className="list-name">Green Leaf 1</span>
              <div className='list-review'>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
              </div>
          </div>
          <div className="list">
              <span className="list-name">Green Leaf 1</span>
              <div className='list-review'>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
              </div>
          </div>
          <div className="list">
              <span className="list-name">Green Leaf 1</span>
              <div className='list-review'>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
                <span className="glyphicon glyphicon-star"></span>
              </div>
          </div>
        </div>
    </div>
  )
}
