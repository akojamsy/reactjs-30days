import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/Store";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster
        position='top-center'
        reverseOrder={false}
        gutter={8}
        containerClassName=''
        containerStyle={{}}
        toastOptions={{
          // Define default options
          // className: "",
          // duration: 5000,
          // style: {
          //   background: "#363636",
          //   color: "#fff",
          // },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#06a564",
              secondary: "white",
            },
            style: {
              background: "#2ddf6f",
              color: "#fff",
            },
          },
        }}
      />
      <App />
    </Provider>
  </React.StrictMode>
);
