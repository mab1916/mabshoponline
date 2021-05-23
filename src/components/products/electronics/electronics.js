import React from "react";
import Electronics1 from "./fetchElectronics1";
import Electronics2 from "./fetchElectronics2";
import Electronics3 from "./fetchElectronics3";
import Electronics4 from "./fetchElectronics4";
import Electronics5 from "./fetchElectronics5";
import Electronics6 from "./fetchElectronics6";

export default function Electronics() {
    return (
        <React.Fragment>
            <table>
                <tr>
                    <td>
                    <Electronics1 />
                    </td>
                    <td>
                    <Electronics2 />
                    </td>
                    <td>
                    <Electronics3 />
                    </td>
                </tr>
                <tr>
                    <td>
                    <Electronics4 />
                    </td>
                    <td>
                    <Electronics5 />
                    </td>
                    <td>
                    <Electronics6 />
                    </td>
                </tr>
            </table>
        </React.Fragment>
    );
}