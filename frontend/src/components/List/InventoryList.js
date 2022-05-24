import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Barcode from "../Functions/Barcode";

function InventoryList() {
  let navigate = useNavigate();
  // List 가져오기
  const [List, setList] = useState([
    {
      name: "Logistics1",
      lotNumber: 34646546465653,
      LogisticsNo: 1213124234,
      storage: "storage1",
      status: "imported",
      process: "SSDFER54210",
      PIC: "홍길똥3",
      place: "광양",
      cnt: 2423,
    },
    {
      name: "Logistics2",
      lotNumber: 346465464656532,
      LogisticsNo: 2312313422,
      storage: "storage1",
      status: "imported",
      process: "SSDFER54210",
      PIC: "홍길똥234",
      place: "광양",
      cnt: 2423,
    },
    {
      name: "Logistics3",
      lotNumber: 1253223423127348762378,
      LogisticsNo: 6345342423,
      storage: "storage1",
      status: "imported",
      process: "SSDFER54210",
      PIC: "홍길똥123",
      place: "광양",
      cnt: 2423,
    },
    {
      name: "Logistics4",
      lotNumber: 346465464656534,
      LogisticsNo: 7234235234,
      storage: "storage1",
      status: "imported",
      process: "SSDFER54210",
      PIC: "홍길똥23423",
      place: "광양",
      cnt: 2423,
    },
    {
      name: "Logistics5",
      lotNumber: 346465464656535,
      LogisticsNo: 1236234754,
      storage: "storage1",
      status: "imported",
      process: "SSDFER54210",
      PIC: "홍길똥5324",
      place: "광양",
      cnt: 2423,
    },
    {
      name: "Logistics6",
      lotNumber: 12341234123412341234,
      LogisticsNo: 9128382394,
      storage: "storage1",
      status: "imported",
      process: "SSDFER54210",
      PIC: "홍길똥546666",
      place: "광양",
      cnt: 2423,
    },
  ]);

  function LogisticsDetail(no) {
    navigate(`/Logisticsdetail/${no}`, { state: { no: no } });
  }
  return (
    <div className="">
      <div className="text-center my-20">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          재고 관리
        </p>
        <p className="mt-4 text-xl text-gray-500 lg:mx-auto">재고관련 조회</p>
      </div>
      {/* select */}
      <div className="w-2/3 mx-auto">
        <div className="grid grid-cols-4 gap-10">
          {/* dropdown */}
          <div className="grid grid-rows-2">
            <div className="">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Region
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
            <div className="">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Storage
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
              >
                <option>전체보기</option>
                <option>Storage1</option>
                <option>Storage2</option>
                <option>Storage3</option>
              </select>
            </div>
            <div className="">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Logistics
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
          {/*  */}
          {/* checkBox */}
          <fieldset>
            <legend className="sr-only">By Email</legend>
            <div
              className="text-base font-medium text-gray-900"
              aria-hidden="true"
            >
              By Email
            </div>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="comments"
                    className="font-medium text-gray-700"
                  >
                    Comments
                  </label>
                  <p className="text-gray-500">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="candidates"
                    name="candidates"
                    type="checkbox"
                    className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="candidates"
                    className="font-medium text-gray-700"
                  >
                    Candidates
                  </label>
                  <p className="text-gray-500">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="offers" className="font-medium text-gray-700">
                    Offers
                  </label>
                  <p className="text-gray-500">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
          {/*  */}
          {/* radio */}
          <fieldset>
            <legend className="contents text-base font-medium text-gray-900">
              Push Notifications
            </legend>
            <p className="text-sm text-gray-500">
              These are delivered via SMS to your mobile phone.
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                />
                <label
                  htmlFor="push-everything"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Everything
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="push-email"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                />
                <label
                  htmlFor="push-email"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Same as email
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                  className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                />
                <label
                  htmlFor="push-nothing"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  No push notifications
                </label>
              </div>
            </div>
          </fieldset>
          {/*  */}
          {/* input */}
          <div className="grid grid-rows-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Logistics Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Logistics lotNumber
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Logistics Something
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
          {/*  */}
        </div>
        {/*  */}
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
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Barcode
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
                              {data.lotNumber}
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
                            <th
                              scope="col"
                              className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              <Barcode itemData={data} />
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

export default InventoryList;
