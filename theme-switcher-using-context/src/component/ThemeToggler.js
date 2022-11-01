import React, { useContext } from "react";
import { Button } from "reactstrap";
import AppContext from "./Context";

const ThemeToggler = () => {
    const [theme, setTheme] = useContext(AppContext);
    return (
        <Button className="mx-auto" onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
        }}>
        Theme Switch: <span>{theme === "light" ? "Dark" : "Light"}</span>
        </Button>
    );
};

export default ThemeToggler;
