import React from "react";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ sales: { title, items }, exist }) => {
  //   console.log(title, items);
  console.log(exist);
  return (
    <>
      <div className='mx-5'>
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
            exist
              ? "grid-cols-3 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} exist={exist} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
