import React, { useState } from "react";
import Context from "./Context";

const Provider = props => {

    const [mission, setMission] = useState({
        mname: "Go To Russia",
        agent: 7,
        acceptance: "Not Accepted"
    });

    return (
        <Context.Provider
            value = {{
                data: mission,
                mstatus: () => {
                    setMission({...mission, acceptance: "Accepted"});
                }
            }}
        >
            {props.children}
        </Context.Provider>
    );

};

export default Provider;