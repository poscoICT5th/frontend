import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function WarehouseList() {
    let navigate = useNavigate();
    // List 가져오기
    const [List, setList] = useState([
        { name: 'product1', lot: 1, productNo: 1213124234, storage: "storage1", status: "imported" },
        { name: 'product2', lot: 2, productNo: 2312313422, storage: "storage1", status: "imported" },
        { name: 'product3', lot: 3, productNo: 6345342423, storage: "storage1", status: "imported" },
        { name: 'product4', lot: 4, productNo: 7234235234, storage: "storage1", status: "imported" },
        { name: 'product5', lot: 5, productNo: 1236234754, storage: "storage1", status: "imported" },
        { name: 'product6', lot: 6, productNo: 9128382394, storage: "storage1", status: "imported" },
    ]);

    function productDetail(no) {
        navigate(`/productdetail/${no}`, { state: { no: no } })
    }
    return (

        <div className="">
            <div className="text-center my-20">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    창고 관리
                </p>
                <p className="mt-4 text-xl text-gray-500 lg:mx-auto">
                    창고조회 페이지
                </p>
            </div>
            {/* select */}
            <div className='w-2/3 mx-auto'>
                <div className='grid grid-cols-4 gap-10'>
                    {/* dropdown */}
                    <div className='grid grid-rows-2'>
                        <div className="">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
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
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
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
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Product
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                            >
                                <option>전체보기</option>
                                <option>Product1</option>
                                <option>Product2</option>
                                <option>Product3</option>
                            </select>
                        </div>
                    </div>
                    {/*  */}
                    {/* checkBox */}
                    <fieldset>
                        <legend className="sr-only">By Email</legend>
                        <div className="text-base font-medium text-gray-900" aria-hidden="true">
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
                                    <label htmlFor="comments" className="font-medium text-gray-700">
                                        Comments
                                    </label>
                                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
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
                                    <label htmlFor="candidates" className="font-medium text-gray-700">
                                        Candidates
                                    </label>
                                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
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
                                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    {/*  */}
                    {/* radio */}
                    <fieldset>
                        <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
                        <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                        <div className="mt-4 space-y-4">
                            <div className="flex items-center">
                                <input
                                    id="push-everything"
                                    name="push-notifications"
                                    type="radio"
                                    className="focus:ring-sky-500 h-4 w-4 text-sky-600 border-gray-300"
                                />
                                <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
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
                                <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
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
                                <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                    No push notifications
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    {/*  */}
                    {/* input */}
                    <div className="grid grid-rows-4">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Product Name
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
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Product LOT
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
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                Product Something
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
                                                Product No
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
                                                            onClick={() => { productDetail(data.productNo) }}
                                                        >
                                                            {data.productNo}
                                                        </th>
                                                    </tr>
                                                )
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
    )
}

export default WarehouseList