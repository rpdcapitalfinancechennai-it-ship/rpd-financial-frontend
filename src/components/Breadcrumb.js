import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <div className="biz-breadcrumb">
      <Link to="/">Home</Link>
      {paths.map((path, index) => {
        const routeTo = "/" + paths.slice(0, index + 1).join("/");
        const label = path.replace("-", " ").toUpperCase();

        return (
          <span key={index}>
            {" "}›{" "}
            <Link to={routeTo}>{label}</Link>
          </span>
        );
      })}
    </div>
  );
}
