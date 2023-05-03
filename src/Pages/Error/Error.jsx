import { Link, useRouteError } from 'react-router-dom';
import Overlay from '../../components/UI/Overlay/Overlay';
import './error.css';

const Error = () => {
  const error = useRouteError();

  return (
    <Overlay>
      <div className="error-container">
        <h3>Oops !!! Something went wrong!</h3>
        <p>The specified route could not be found</p>
        <div className="error-message">
          <p>
            <i>{error.statusText}</i>
            <i>{error.message}</i>
          </p>
        </div>
        <Link to='/'>TAKE ME BACK!</Link>
      </div>
    </Overlay>
  );
};

export default Error;
