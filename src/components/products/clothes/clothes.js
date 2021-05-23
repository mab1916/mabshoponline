import React from "react";
import Clothes1 from "./fetchClothes1";
import Clothes2 from "./fetchClothes2";
import Clothes3 from "./fetchClothes3";
import Clothes4 from "./fetchClothes4";
import Clothes5 from "./fetchClothes5";
import Clothes6 from "./fetchClothes6";
import Clothes7 from "./fetchClothes7";
import Clothes8 from "./fetchClothes8";
import Clothes9 from "./fetchClothes9";
import Clothes10 from "./fetchClothes10";

export default function Clothes() {
    return (
        <React.Fragment>
            <table>
                <tr>
                    <td>
                    <Clothes1 />
                    </td>
                    <td>
                    <Clothes2 />
                    </td>
                    <td>
                    <Clothes3 />
                    </td>
                </tr>
                <tr>
                    <td>
                    <Clothes4 />
                    </td>
                    <td>
                    <Clothes5 />
                    </td>
                    <td>
                    <Clothes6 />
                    </td>
                </tr>
                <tr>
                    <td>
                    <Clothes7 />
                    </td>
                    <td>
                    <Clothes8 />
                    </td>
                    <td>
                    <Clothes9 />
                    </td>
                </tr>
                <tr>
                    <td>
                    <Clothes10 />
                    </td>
                </tr>
            </table>
        </React.Fragment>
    );
}