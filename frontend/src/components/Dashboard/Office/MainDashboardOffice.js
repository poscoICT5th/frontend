import React from 'react'
import ListRequestStoredOffice from './ListRequestStoredOffice'
import ListRequestTakenoutOffice from './ListRequestTakenoutOffice'
import ListRequestedMoveOffice from './ListRequestedMoveOffice'
import { useNavigate } from 'react-router-dom'

function MainDashboardOffice() {
    let navigate = useNavigate();
    function toProductList(params) {
        navigate("/ProductList")
    }
    return (
        <div className=''>
            <div className="py-12 bg-white mx-16">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">PoscoICT-5</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Office Main Dashboard
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="mt-10">
                            <p className='text-xl text-center font-bold mb-3'>물류 입고 승인대기</p>
                            <p className='text-md text-center mb-3' onClick={() => { toProductList() }}>전체보기</p>
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestStoredOffice />
                                </div>
                            </dl>
                        </div>
                        {/* <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <GraphDonutOffice />
                                </div>
                            </dl>
                        </div> */}
                        <div className="mt-10">
                            <p className='text-xl text-center font-bold mb-3'>물류 출고 승인대기</p>
                            <p className='text-md text-center mb-3' onClick={() => { toProductList() }}>전체보기</p>
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestTakenoutOffice />
                                </div>
                            </dl>
                        </div>
                        {/* <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <GraphBarStored />
                                </div>
                            </dl>
                        </div> */}
                        <div className="mt-10">
                            <p className='text-xl text-center font-bold mb-3'>물류 창고이동 승인대기</p>
                            <p className='text-md text-center mb-3' onClick={() => { toProductList() }}>전체보기</p>
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestedMoveOffice />
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <p className='text-xl text-center font-bold mb-3'>물류 창고이동 승인대기</p>
                            <p className='text-md text-center mb-3' onClick={() => { toProductList() }}>전체보기</p>
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestedMoveOffice />
                                </div>
                            </dl>
                        </div>
                        {/* <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <GraphBarWarehouse />
                                </div>
                            </dl>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDashboardOffice