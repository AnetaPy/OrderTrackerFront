import React from "react";
interface Props {
    lp: number;
    name: string;
    amount: number;
}
export const ItemTableRow = (props: Props) => {
    return (
        <tr>
            <td>{props.lp}</td>
            <td>{props.name}</td>
            <td>{props.amount}</td>
        </tr>
    )
}