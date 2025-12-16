// import { Navigate } from "react-router-dom";
// import { useAuth } from "@/context/AuthProvider";

// function ProtectedRoute({ children, role }) {
//   const { user } = useAuth();

//   // Not logged in
//   if (!user) {
//     return <Navigate to="/signup" replace />;
//   }

//   // Role-based restriction
//   if (role && user.role !== role) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// }

// export default ProtectedRoute;



import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, role }) {
  const { user, loading } = useSelector((state) => state.auth);

  // Still verifying token
  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  // Role-based restriction
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
  