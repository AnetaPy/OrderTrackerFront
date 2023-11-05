import {useEffect, useState} from "react";
import * as XLSX from "xlsx";
import './ImportExcel.css';

interface Props {
    idOrder: string
}

export const ImportExcel = (props: Props) => {
    const [rowData, setRowData] = useState([])

    const handleFileUpload = (e) => {
        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        reader.onload = (e) => {
            const data = e.target?.result;
            const workbook = XLSX.read(data, {type: "binary"});
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const parsedData = XLSX.utils.sheet_to_json(sheet);
            setRowData(parsedData);
        }
    }

    useEffect(() => {
        (async () => {
            for (const element of rowData) {
                const elementNew = {
                    name: element.name,
                    amount: element.amount,
                }
                // Insert element.
                const resElement = await fetch(`http://localhost:3001/element`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(elementNew)
                });
                const data = await resElement.json();

                //Insert relation element-order.
                const elementRelation = {
                    order_id: props.idOrder,
                    item_id: data.id,
                    amount: element.amount,
                }

                const resRelation = await fetch(`http://localhost:3001/element/relation`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(elementRelation)
                });
                await resRelation.json();
            }

        })()
    }, [props.idOrder])

    return (
        <div className="importExcel">
            <input
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileUpload}
                required/>
            {rowData.length > 0 && (
                <table>
                    <thead>
                    <tr>
                        {
                            Object.keys(rowData[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        rowData.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}>{value}</td>
                                ))}
                            </tr>

                        ))
                    }
                    </tbody>
                </table>
            )}

        </div>
    )
}