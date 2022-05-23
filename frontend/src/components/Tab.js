import React, { useEffect, useRef, useState } from 'react'
import { Button, Tabs } from 'antd';
import MainDashboardOffice from './Dashboard/Office/MainDashboardOffice';
import List from './List/List';
import { useSelector } from 'react-redux';
const { TabPane } = Tabs;
// 맨 첫 페이지는 무조건 MainDashboard
const defaultPanes = Array.from({
    length: 1,
}).map((_, index) => {
    const id = String(index + 1);
    return {
        title: "Main Dashboard",
        content: <MainDashboardOffice />,
        key: id,
    };
});

function Tab() {
    let data = useSelector((state) => { return state })
    console.log(data)
    const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
    const [panes, setPanes] = useState(defaultPanes);
    const newTabIndex = useRef(0);
    useEffect(() => {

    }, [])

    const onChange = (key) => {
        setActiveKey(key);
    };
    function add(params) {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        setPanes([
            ...panes,
            {
                title: data.tabTitle,
                content: <List />,
                key: newActiveKey,
            },
        ]);
        setActiveKey(newActiveKey);
    }

    function remove(targetKey) {
        let lastIndex = -1;
        panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });

        if (panes.length && activeKey === targetKey) {
            let newActiveKey;

            if (lastIndex >= 0) {
                newActiveKey = panes[lastIndex].key;
            } else {
                newActiveKey = panes[0].key;
            }

            setActiveKey(newActiveKey);
        }

        const newPanes = panes.filter((pane) => pane.key !== targetKey);
        setPanes(newPanes);
    }
    function onEdit(targetKey, action) {
        if (action === 'add') {
            add();
        } else {
            if (targetKey !== '1') {
                remove(targetKey);
            } else {
                alert("메인페이지입니다")
            }
        }
    }
    return (
        <div>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={add}>ADD</Button>
            </div>
            <Tabs defaultActiveKey='1' hideAdd onChange={onChange} activeKey={activeKey} type="editable-card" onEdit={onEdit}>
                {panes.map((pane) => (
                    <TabPane tab={pane.title} key={pane.key} style={{ maxWidth: "90%", margin: "auto" }}>
                        {pane.content}
                    </TabPane>
                ))}
            </Tabs>
        </div>
    )
}

export default Tab