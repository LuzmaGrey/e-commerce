import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import "../styles/Auth.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(email, password);
      toast.success("Welcome back Trainer!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to log in: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="pokeball-icon"></div>
          <h2>Trainer Login</h2>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            className={`auth-button ${loading ? "loading" : ""}`} 
            disabled={loading} 
            type="submit"
          >
            {loading && <BiLoaderCircle className="spinner" />}
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <div className="auth-footer">
          Don't have a Pokedex yet? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
