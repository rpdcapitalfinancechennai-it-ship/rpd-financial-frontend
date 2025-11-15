import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); //check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); //redirect to login after logout
  };

  return (
    <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="RPD Logo"
          style={{
            width: 80,
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
      <nav style={{ display: "flex", gap: 15, alignItems: "center" }}>
        {[
          { path: "/", label: "Home" },
          { path: "/service", label: "Service" },
          { path: "/fixed-deposit", label: "Fixed Deposit" },
          { path: "/loan", label: "Loan" },
          { path: "/chit", label: "Chit" },
          { path: "/report", label: "Report" },
        ].map(({ path, label }) => (
          <Link key={path} to={path} className={pathname === path ? "active" : ""}>
            {label}
          </Link>
        ))}
          {!token && (
          <>
            <Link to="/register" className={pathname === "/register" ? "active" : ""}>Register</Link>
            <Link to="/login" className={pathname === "/login" ? "active" : ""}>Login</Link>
          </>
        )}
        {token && (
          <button onClick={handleLogout} style={{ cursor: "pointer", marginTop : 0 }}>Logout</button>
        )}
      </nav>
    </header>
  );
}
