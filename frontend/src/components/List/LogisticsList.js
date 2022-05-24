import React from "react";
import { Table } from "antd";
import Barcode from "../Functions/Barcode";
import LogisticsCancel from "../Functions/LogisticsCancel";
function logisticsList() {
    // usestate들

    // 

    // axios

    // 
  const columns = [
    {
      title: "lotNumber",
      width: 100,
      dataIndex: "lotNumber",
      key: "lotNumber",
      fixed: "left",
      align: "center",
    },
    {
      title: "place",
      width: 100,
      dataIndex: "place",
      key: "place",
      fixed: "left",
      align: "center",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
      width: 150,
      align: "center",
    },
    {
      title: "cnt",
      dataIndex: "cnt",
      key: "cnt",
      width: 150,
      align: "center",
    },
    {
      title: "process",
      dataIndex: "process",
      key: "process",
      width: 150,
      align: "center",
    },
    {
      title: "PIC",
      dataIndex: "PIC",
      key: "PIC",
      width: 150,
      align: "center",
    },
    {
      title: "바코드",
      key: "Barcode",
      fixed: "right",
      width: 100,
      align: "center",
      render: (e) => (
        <div>
          <Barcode itemData={e} />
        </div>
      ),
    },
    {
      title: "요청철회",
      key: "Cancel",
      fixed: "right",
      width: 100,
      align: "center",
      render: (e) => (
        <div>
          <LogisticsCancel itemData={e} />
        </div>
      ),
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
      PIC: "홍길동" + i,
    });
  }
  return (
    <div>
      <div className="flex justify-center">
        <div className="mt-10 sm:mt-0 mx-auto">
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        제품명
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        상태
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>입고요청</option>
                        <option>출고요청</option>
                        <option>창고이동</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        품번
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 ">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        고객명
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        수량
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        중량
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        단위
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>KG</option>
                        <option>EA</option>
                        <option>t</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Table
        columns={columns}
        dataSource={data}
        // scroll={{
        //   x: 1500,
        //   y: 300,
        // }}
      />
    </div>
  );
}

export default logisticsList;
