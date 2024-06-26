import React from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/slice/Productslice";
const TagButton = () => {
  const tags = [
    "Healthy",
    "LowFat",
    "Vegetarian",
    "Kid Foods",
    "Vitamins",
    "Bread",
    "Meat",
    "Snacks",
    "Tiffin",
    "Lunch",
    "BreakFast",
    "Fruit",
  ];
  const dispatch = useDispatch();
  return (
    <section>
      <div className="flex items-center mb-2  flex-wrap gap-2 ">
        {tags.map((item, index) => {
          return (
            <button
              onClick={() => dispatch(filterProducts(item))}
              value={item}
              className=" bg-[#F2F2F2] rounded-3xl px-[16px] py-[6px] hover:bg-primary hover:text-white text-sm font-normal"
            >
              {item}
            </button>
          );
        })}
      </div>
    </section>
  );
};
export default TagButton;

// import React from "react";
// const Buttons = ({ onClickHandler, value, tag }) => {
//   return (
//     <section>
//       <div className=" ">
//         <button
//           onClick={onClickHandler}
//           value={value}
//           className=" bg-[#F2F2F2] rounded-3xl px-[16px] py-[6px] hover:bg-primary hover:text-white text-sm font-normal"
//         >
//           {tag}
//         </button>
//       </div>
//     </section>
//   );
// };
// export default Buttons;
