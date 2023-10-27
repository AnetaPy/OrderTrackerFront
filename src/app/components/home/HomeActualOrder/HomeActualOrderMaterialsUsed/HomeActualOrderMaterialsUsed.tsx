import React from "react";
import './HomeActualOrderMaterialsUsed.css';

export const HomeActualOrderMaterialsUsed = () => {
    return (
        <div className="Home_materials_used">
            <h3>Wykorzystane materiały</h3>
            <div className="Home_materials_used_container">

                <table>
                    <thead>
                    <tr>
                        <th>Lp</th>
                        <th>Nazwa</th>
                        <th>Ilość</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Freaz</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Recznik</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Płyn</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Freaz</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Recznik</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Płyn</td>
                        <td>30</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}