import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WarehouseList() {
  let navigate = useNavigate();
  // List 가져오기
  const [List, setList] = useState([
    {
      name: "Logistics1",
      lot: 1,
      LogisticsNo: 1213124234,
      storage: "storage1",
      status: "imported",
    },
    {
      name: "Logistics2",
      lot: 2,
      LogisticsNo: 2312313422,
      storage: "storage1",
      status: "imported",
    },
    {
      name: "Logistics3",
      lot: 3,
      LogisticsNo: 6345342423,
      storage: "storage1",
      status: "imported",
    },
    {
      name: "Logistics4",
      lot: 4,
      LogisticsNo: 7234235234,
      storage: "storage1",
      status: "imported",
    },
    {
      name: "Logistics5",
      lot: 5,
      LogisticsNo: 1236234754,
      storage: "storage1",
      status: "imported",
    },
    {
      name: "Logistics6",
      lot: 6,
      LogisticsNo: 9128382394,
      storage: "storage1",
      status: "imported",
    },
  ]);

  function LogisticsDetail(no) {
    navigate(`/Logisticsdetail/${no}`, { state: { no: no } });
  }
  return (
    <div className="">
      <div className="text-center my-20">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          창고 관리
        </p>
        <p className="mt-4 text-xl text-gray-500 lg:mx-auto">창고조회 페이지</p>
      </div>

      {/* select */}
      <div className="w-2/3 mx-auto">
        <div className="grid grid-cols-4 gap-8">
          {/* dropdown */}
          <div className="grid grid-rows-2">
            <div className="col-span-6">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                사업장
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              >
                <option>전체보기</option>
                <option>포항</option>
                <option>광양</option>
                <option>판교</option>
              </select>
            </div>

            {/* first name */}
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                면적
              </label>

              <div className="col-span-6">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md w-1/2"
                />
              </div>

              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md w-1/2"
              />
            </div>
          </div>

          {/* 첫줄 */}
          {/* checkBox */}
          <div className="grid grid-rows-2">
            <div className="">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                제품군
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              >
                <option>전체보기</option>
                <option>포항</option>
                <option>광양</option>
                <option>판교</option>
              </select>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* 고객사  */}
          <div className="grid grid-rows-2">
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="company-website"
                className="block text-sm font-medium text-gray-700"
              >
                고객사
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
                <span className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                  🔍
                </span>
              </div>

              <div className="">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  창고생성일
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                >
                  <option>전체보기</option>
                  <option>Logistics1</option>
                  <option>Logistics2</option>
                  <option>Logistics3</option>
                </select>
              </div>
            </div>
          </div>

          {/*  */}
          {/* input */}
          <div className="grid grid-rows-1">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                창고코드
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/*그리드 새로 만듬 */}
          <div className="grid grid-rows-1">
            <label
              htmlFor="company-website"
              className="block text-sm font-medium text-gray-700"
            >
              창고위치
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
              />
              <span className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300">
                🔍
              </span>
            </div>
          </div>

          {/*  */}
        </div>

        {/*table list  */}
        <div className="px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Save
          </button>
        </div>
        <div className="flex flex-col mx-1 mt-2 text-center">
          <div className="-my-2 overflow-hidden sm:-mx-6 lg:-mx-1">
            <div className="py-2 align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Logistics No
                      </th>
                    </tr>
                  </thead>
                  {List ? (
                    <tbody className="bg-white divide-y divide-gray-200">
                      {List.map((data, index) => {
                        return (
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {data.name}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              {data.lot}
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                              onClick={() => {
                                LogisticsDetail(data.LogisticsNo);
                              }}
                            >
                              {data.LogisticsNo}
                            </th>
                          </tr>
                        );
                      })}
                    </tbody>
                  ) : (
                    <tbody></tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WarehouseList;
