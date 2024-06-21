

import PropTypes from 'prop-types';



const Link = ({route}) => {
  return (
    <li  className="mr-3 hover:bg-yellow-600 px-4">
      <a href={route.path}>{route.name}</a>
    </li>
    
  );
};

export default Link;


Link.propTypes = {
    route: PropTypes.object
}


