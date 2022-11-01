import { createContext } from "react";

const AppContext = createContext(["dark", () => {}]);

export default AppContext;