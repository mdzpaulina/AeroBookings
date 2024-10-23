import * as XLSX from 'xlsx'
import './ExcelReader.css'
import React, { useEffect, useState } from 'react'

function ExcelReader() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./VLMG.xlsx")
            .then((response) => response.arrayBuffer())
            .then((buffer) => {
                const workbook = XLSX.read(buffer, { type: 'array' });
                const worksheetName = workbook.SheetNames[0]; // Leemos la primera hoja
                const worksheet = workbook.Sheets[worksheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convertimos a JSON
                setData(jsonData); // Guardamos los datos en el estado
            });
    }, []);

    return (
        <div className="table-container">
            <h2 className="table-title">Flights Database</h2>

            {data.length > 0 && (
                <table className="table" border="1">
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, i) => (
                                    <td key={i}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ExcelReader;