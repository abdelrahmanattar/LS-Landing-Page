import { applicantExam } from "@Routes/DefaultRoutes";

const NavBarWrapper = ({ user, children }) => {
  return (
    (user.isLogged || window.location.pathname.match(applicantExam)) &&
    children
  );
};

export default NavBarWrapper;
