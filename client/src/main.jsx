
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
import AppWrapper from "./AppWrapper";


// Import the router configuration from the file we just defined
import router from './router/router'; 

// Import your global state provider
// import { AttendanceProvider } from './context/AttendanceContext'; 

createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
    </Provider>
  
);