import React from 'react'
import { Table } from 'antd';
import Barcode from '../Functions/Barcode'
function WarehouseList() {
    const columns = [
        {
            title: 'lotNumber',
            width: 100,
            dataIndex: 'lotNumber',
            key: 'lotNumber',
            fixed: 'left',
            align: 'center'
        },
        {
            title: 'place',
            width: 100,
            dataIndex: 'place',
            key: 'place',
            fixed: 'left',
            align: 'center'
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: "name",
            width: 150,
            align: 'center'
        },
        {
            title: 'cnt',
            dataIndex: 'cnt',
            key: 'cnt',
            width: 150,
            align: 'center'
        },
        {
            title: 'process',
            dataIndex: 'process',
            key: 'process',
            width: 150,
            align: 'center'
        },
        {
            title: 'PIC',
            dataIndex: 'PIC',
            key: 'PIC',
            width: 150,
            align: 'center'
        },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            align: 'center',
            render: (e) => <div><Barcode itemData={e} /></div>,
        },
    ];
    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            lotNumber: "34646546465653" + i * 100,
            place: "포항 공장" + i,
            name: "STRIP_KS-SCP1S_83mm_1t",
            cnt: i + 10,
            process: "ST50",
            PIC: "홍길동" + i
        });
    }
    return (
        <div>
            
            <Table
                columns={columns}
                dataSource={data}
                scroll={{
                    x: 1500,
                    y: 300,
                }}
            />
        </div>
    )
}

export default WarehouseList