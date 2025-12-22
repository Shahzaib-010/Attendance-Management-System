import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, role }) {
  const { user, loading } = useSelector((state) => state.auth);

  console.log("🛡️ PROTECTED ROUTE CHECK");
  console.log("➡️ USER:", user);
  console.log("➡️ REQUIRED ROLE:", role);

  // Still verifying token
  if (loading) {
    return <div className="text-white">Verifying session...</div>;
  }

  // Not logged in
  if (!user) {
    console.log("❌ NO USER — REDIRECT TO SIGNUP");
    return <Navigate to="/signup" replace />;
  }

  // Role-based restriction
  if (role && user.role !== role) {
    console.log(
      `❌ ROLE BLOCKED: user=${user.role}, required=${role}`
    );
    return <Navigate to="/" replace />;
  }

  console.log("✅ ACCESS GRANTED");
  return children;
}

export default ProtectedRoute;

  