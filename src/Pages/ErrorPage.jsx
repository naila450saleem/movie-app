import { useRouteError } from "react-router-dom";
 import errorImg from "../assets/404.svg";
 import { NavLink } from "react-router-dom";
 import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (error.status === 404 ){
    return (
 
    <section className="error-page">
      <div className="error-content">
        <img src={errorImg} alt="404 Error" />
        <p className="error-text">The page you were looking for could not be found</p>
        <p className="error-subtext">...Back to previous page</p>
       
      </div>
      <div className="error-buttons">
      <NavLink to="/" className="btn red-btn">Go To HomePage</NavLink>
      <button className="btn red-btn" onClick={handleGoBack}>Go Back</button>
      </div>
    </section>
   
    );
};
console.log(error);

return <h1>The page you are looking does not exist</h1>;
};


