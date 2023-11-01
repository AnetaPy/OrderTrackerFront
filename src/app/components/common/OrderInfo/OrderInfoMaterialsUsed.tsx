import React from "react";
import './OrderInfoItemsUsed.css';
import {ItemTableRow} from "@/components/common/OrderInfo/ItemTableRow";
import {MaterialEntity} from "types";

interface Props {
    text?: string;
    materials: (MaterialEntity)[];
}

export const OrderInfoMaterialsUsed = (props: Props) => {
    return (
        <div className="Order_info_materials">
            {props.text ? <h3>{props.text}</h3> : null}
            <div className="Order_info_materials_container">
                <table>
                    <thead>
                    <tr>
                        <th>Lp</th>
                        <th>Nazwa</th>
                        <th>Ilość</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.materials.map((material, index) => <ItemTableRow key={material.id} lp={index+1} name={material.name} amount={material.amount}/>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}