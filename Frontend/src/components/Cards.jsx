// eslint-disable-next-line no-unused-vars
import React from "react";

function Cards({ item }) {
  return (
    <>
      <div>
        <div className="card bg-base-100 w-80 md:m-6 mt-6 mb-6 m-auto shadow-xl hover:scale-105 duration-100 dark:bg-slate-900 dark:text-white dark:border ">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline py-3">${item.price}</div>
              <div className="badge cursor-pointer badge-outline hover:bg-pink-500 hover:text-white duration-200 py-3">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
