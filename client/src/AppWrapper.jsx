import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyUser } from "./features/auth/authSlice";

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();

  
   useEffect(() => {
    dispatch(verifyUser()); 
  }, [dispatch]);

  return children;
};

export default AppWrapper;