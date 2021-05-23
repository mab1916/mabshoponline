import React from "react";
import Jewelery1 from "./fetchJewelery1";
import Jewelery2 from "./fetchJewelery2";
import Jewelery3 from "./fetchJewelery3";
import Jewelery4 from "./fetchJewelery4";

export default function Jewelery() {
    return (
        <React.Fragment>
            <table>
                <tr>
                    <td>
                    <Jewelery1 />
                    </td>
                    <td>
                    <Jewelery2 />
                    </td>
                    <td>
                    <Jewelery3 />
                    </td>
                </tr>
                <tr>
                    <td>
                    <Jewelery4 />
                    </td>
                </tr>
            </table>
        </React.Fragment>
    );
}