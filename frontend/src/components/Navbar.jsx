import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#0f0" }}>
      <Link to="/" style={{ color: "#0f0", marginRight: "20px" }}>
        Home
      </Link>
      <Link to="/nerd-jokes" style={{ color: "#0f0" }}>
        Nerd Jokes
      </Link>
    </nav>
  );
}
