import React from "react";
import './OrderInfoItemsUsed.css';
import {ItemTableRow} from "@/components/common/OrderInfo/ItemTableRow";
import {ElementEntity} from "types";

interface Props {
    text: string;
    elements: (ElementEntity)[];
}

export const OrderInfoElementsUsed = (props:Props) => {
    return (
        <div className="Order_info_elements">
             <h3>{props.text}</h3>
            <div className="Order_info_elements_container">
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
                        props.elements.map((element, index) => <ItemTableRow key={element.id} lp={index+1} name={element.name} amount={element.amount}/>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}