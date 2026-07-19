import { NavLink } from "react-router-dom";

function Button({ to, children }) {
  return (
    <NavLink
      to={to}
      className="inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-green-800 hover:scale-105"
    >
      {children}
    </NavLink>
  );
}

export default Button;