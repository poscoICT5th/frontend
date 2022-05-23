import { Tabs } from 'antd';
import React, { useRef, useState } from 'react'
import 'antd/dist/antd.css';
import Login from '../../Account/Login';
import ProductList from '../ProductList';
import StockList from '../StockList';

const { TabPane } = Tabs;
const initialPanes = [
  {
    title: 'Tab 1',
    content: <Login />,
    key: '1',
  },
  {
    title: 'Tab 2',
    content: <ProductList />,
    key: '2',
  },
  {
    title: 'Tab 3',

    content: <StockList />,
    key: '3',
  },
];

function RequestProductListOffice() {
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState(initialPanes[0].key);
  const [panes, setPanes] = useState(initialPanes);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };

  const add = (title, content, key) => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...panes];
    newPanes.push({
      title: title,
      content: content,
      key: newActiveKey,
    });
    setPanes(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter((pane) => pane.key !== targetKey);

    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }

    setPanes(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add("새탭이에용", <Login />);
    } else {
      remove(targetKey);
    }
  };
  return (
    <div className=''>
      <Tabs type="editable-card" onChange={onChange} activeKey={activeKey} onEdit={onEdit}>
        {panes.map((pane) => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}

export default RequestProductListOffice