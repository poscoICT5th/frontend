import axios from "axios";
import React, { useState } from "react";

function RequestMove() {
  const [inout, setinout] = useState(null)
  const [name, setName] = useState(null);
  const [lotNum, setlotNum] = useState(null);
  const [productName, setproductName] = useState(null);
  const [price, setPrice] = useState(0);
  const [memo, setMemo] = useState(null);

  function Request(params) {
    if (inout != null && name != null) {
      axios.post('api/logistics',
        {
          status: inout
          // 보낼 정보들 넣어주기
        })
        .then(() => {
          alert('요청이 등록되었습니다.')
        })
        .catch(() => {
          alert("네트워크상태가 불안정합니다, 다시 시도해주세요.")
        })
    } else {
      alert("입력하지 않은 항목이 있습니다")
    }
  }

  return (
    <div className="flex justify-center text-center">
      <div className="mx-16 w-4/5">
        <div className="bg-white overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              물류 입출고 요청
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              {/* 입/출고/이동 선택 */}
              <div className="bg-white px-4 py-5 grid grid-cols-3 gap-4 px-6">
                <dt className="text-sm font-medium text-gray-500 font-bold">
                  입출고 구분
                </dt>
                <div className="col-span-2">
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        value="In"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        onChange={(e) => { setinout(e.target.defaultValue) }}
                      />
                      <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                        입고예정
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        value="Out"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        onChange={(e) => { setinout(e.target.defaultValue) }}
                      />
                      <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                        출고예정
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* 물품명 */}
              <div className="bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4 px-6">
                <dt className="text-sm font-medium text-gray-500 font-bold">
                  물품명
                </dt>
                <input
                  width={100}
                  height="100%"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md col-span-2"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              {/*  */}
              {/* 로트번호 */}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 font-bold">
                  lotNum 번호
                </dt>

                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-2"
                  onChange={(e) => {
                    setlotNum(e.target.value);
                  }}
                />
              </div>
              {/*  */}
              {/* 뭄품번호 */}
              <div className="bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4 px-6">
                <dt className="text-sm font-medium text-gray-500 font-bold">
                  Logistics Number
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-2"
                  onChange={(e) => {
                    setproductName(e.target.value);
                  }}
                />
              </div>
              {/* 물품가격 */}
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500 font-bold">
                  물품가격
                </dt>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-2"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              {/*  */}
              {/* 특이사항 */}
              <div className="bg-gray-50 px-4 py-5 grid grid-cols-3 gap-4 px-6">
                <dt className="text-sm font-medium text-gray-500 font-bold">특이사항</dt>
                <input
                  id="about"
                  name="about"
                  rows={3}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-2"
                  onChange={(e) => {
                    setMemo(e.target.value);
                  }}
                />
              </div>
            </dl>
          </div>
          <div className="py-3 text-right">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
              onClick={() => { Request() }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestMove;
