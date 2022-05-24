import React from 'react'
import { Table } from 'antd';
import Barcode from '../Functions/Barcode'
import LogisticsCancel from '../Functions/LogisticsCancel';
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
            title: '바코드',
            key: 'Barcode',
            fixed: 'right',
            width: 100,
            align: 'center',
            render: (e) => <div><Barcode itemData={e} /></div>,
        },
        {
            title: '요청철회',
            key: 'Cancel',
            fixed: 'right',
            width: 100,
            align: 'center',
            render: (e) => <div><LogisticsCancel itemData={e} /></div>,
        },
    ];
    const data = [];
    for (let i = 0; i < 20; i++) {
        data.push({
            lotNumber: "346465653" + i * 100,
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
            // scroll={{
            //     x: 1500,
            //     y: 1100,
            // }}
            />
        </div>
    )
}

export default WarehouseList