import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col bg-white shadow-md p-10 space-y-5 items-start rounded-xl border">
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.category}`}
          key={category.category}
          className={({ isActive }) =>
            `w-full text-justify py-4 px-5 rounded-full ${
              isActive ? "bg-[#9538E2] text-white" : "bg-base-300"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
