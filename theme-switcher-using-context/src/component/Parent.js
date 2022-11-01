import React, { useContext } from "react";
import { Container } from "reactstrap";
import AppTheme from "./Themes";
import ThemeToggler from "./ThemeToggler";
import "bootstrap/dist/css/bootstrap.css";
import AppContext from "./Context";

const Parent = () => {
    const [themeMode] = useContext(AppContext);
    const currentTheme = AppTheme[themeMode];
    return (
        <Container className="p-5 m-5" fluid="true" style={currentTheme}>
        <Container fluid="true">
            <h1>Theme Switcher</h1>
        </Container>
        <ThemeToggler />
        </Container>
    );
};

export default Parent;
