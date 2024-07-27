import { NavLink } from "react-router-dom";
import { container, title, message, homeLink } from "./NotFoundPage.module.css";

const NotFounfPage = () => {
  return (
    <div className={container}>
      <h1 className={title}>404 - Page Not Found</h1>
      <p className={message}>
        Oops! The page you are looking for doesn't exist. It might have been
        removed, or the URL might be incorrect.
      </p>
      <NavLink to="/" className={homeLink}>
        Return to Home Page
      </NavLink>
    </div>
  );
};

export default NotFounfPage;
