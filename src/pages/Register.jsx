import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import "../styles/Auth.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);
      await signup(email, password);
      toast.success("Trainer account created!");
      navigate("/");
    } catch (error) {
      toast.error("Failed to create an account: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="pokeball-icon"></div>
          <h2>Join the League</h2>
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
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </div>
          <button 
            className={`auth-button ${loading ? "loading" : ""}`} 
            disabled={loading} 
            type="submit"
          >
            {loading && <BiLoaderCircle className="spinner" />}
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="auth-footer">
          Already a Trainer? <Link to="/login">Log in here</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
