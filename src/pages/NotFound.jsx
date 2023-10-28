import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <p>
        Sorry, such a page was not found😒 Please return to the
        <Link to="/">homepage</Link>
      </p>
    </div>
  );
};
