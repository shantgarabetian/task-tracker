import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from 'react-router-dom'

const Header = ({ title, onClick, addTaskFlag }) => {
  const { color, text } = addTaskFlag
    ? { color: "red", text: "Close" }
    : { color: "green", text: "Add" };

const location = useLocation()    
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && <Button color={color} text={text} onClick={onClick} />}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
//CSS in JS
// const headingStyle = {
//     color: 'white',
//     backgroundColor:'gray'
// }

export default Header;
