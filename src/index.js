import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
    typography: {
        fontFamily: "Outfit"
    },
    palette: {
        primary: {
            main: "#181818"
        },
        secondary: {
            main: "#247ffb"
        },
        background: {
            default: "#000000",
            paper: "#181818",
            completed: "#12f44a"
        },
        text: {
            primary: "#dee0e5",
            secondary: "#676767"
        },
        light: {
            default: "rgba(204, 204, 204, 0.1)",
            green: "rgba(18,244,74,0.1)",
            red: "rgba(255,63,94,0.1)",
            yellow: "rgba(254,167,6,0.1)"
        },
        mode: "dark",
        border: {
            default: "rgba(204, 204, 204, 0.3)",
            red: "rgba(255, 63, 94, 0.3)",
            green: "rgba(18,244,74,0.3)",
            yellow: "rgba(254,167,6,0.3)"
        },
        colors: {
            default: "rgb(204, 204, 204)",
            red: "rgb(255, 63, 94)",
            green: "rgb(18,244,74)",
            yellow: "#fea706"
        }
    },
    shape: {
        borderRadius: 32
    }
});

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme={true}/>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
