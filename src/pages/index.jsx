import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import routes from "./routes";
import { useEffect } from "react";

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Redirect />} />

        {routes.map(({ path, Component }, i) => (
          <Route key={i} path={path} element={<Component />} />
        ))}

        <Route path="*" element={<Redirect />} />
      </Routes>
    </Router>
  );
}

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home", { replace: true });
  }, [navigate]);
  return null;
};
