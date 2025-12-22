
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
import AppWrapper from "./AppWrapper";
import router from './router/router'; 



createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      
        <RouterProvider router={router} />
      
    </Provider>
  
);