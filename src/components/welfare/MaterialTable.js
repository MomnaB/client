import React, { useState } from 'react'
import MaterialTable from 'material-table';
import { tableIcons } from '../Icons/Icons';
export default function Materialtable() {

    const [columns, setColumns] = useState([
        { title: 'Name', field: 'MemberName' },
        { title: 'Surname', field: 'RelationWithPatient', initialEditValue: 'initial edit value' },
        { title: 'Birth Year', field: 'MonthlyIncome', type: 'numeric' },
    ]);

    const [data, setData] = useState([]);

    return (
        <MaterialTable
            icons={tableIcons}
            title="Editable Preview"
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setData([...data, newData]);

                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);

                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);

                            resolve()
                        }, 1000)
                    }),
            }}
        />
    )
}