import React from "react";
import './OrderInfoItemsUsed.css';
import {ItemTableRow} from "@/components/common/OrderInfo/ItemTableRow";
import {ItemEntity} from "types";

interface Props {
    text?: string;
    items: (ItemEntity)[];
    btn?: boolean;
    onMaterialsChange?: () => void;
}

export const OrderInfoItemsUsed = (props: Props) => {
    const {onMaterialsChange, text, btn, items} = props;

    return (
        <div className="Order_info_items">
            <h3>{text}</h3>
            <div className="Order_info_items_container">
                <table>
                    <thead>
                    <tr>
                        <th>Lp</th>
                        <th>Nazwa</th>
                        <th>Ilość</th>
                        {btn ? <th>Usuń materiał</th> : null}
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map((element, index) => <ItemTableRow key={element.id} lp={index + 1}
                                                                    id={element.id} name={element.name}
                                                                    amount={element.amount} btn={btn}
                                                                    onMaterialsChange={onMaterialsChange ? onMaterialsChange : null}/>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}