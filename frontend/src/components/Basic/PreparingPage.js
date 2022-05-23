import React from 'react'
import { useNavigate } from 'react-router-dom'

function PreparingPage() {
    let navigate = useNavigate();
    function back(params) {
        navigate(-1);
    }
    return (
        <div className="">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block text-sky-900">준비중인 페이지입니다.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <p
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 cursor-pointer"
                            onClick={() => { back() }}
                        >
                            뒤로가기
                        </p>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <p
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-600 bg-white hover:bg-sky-50 cursor-pointer"
                        >
                            #
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreparingPage