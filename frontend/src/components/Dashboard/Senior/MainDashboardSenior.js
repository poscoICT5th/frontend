import React from 'react'
import GraphBarStored from '../Common/GraphBarStored'
import GraphBarWarehouse from '../Common/GraphBarWarehouse'
import GraphDonutSenior from './GraphDonutSenior'
import ListRequestStoredSenior from './ListRequestStoredSenior'
import ListRequestTakenoutSenior from './ListRequestTakenoutSenior'
import ListRequestedMoveSenior from './ListRequestedMoveSenior'
import { useNavigate } from 'react-router-dom'

function MainDashboardSenior() {
    let navigate = useNavigate();
    function toRequestProductListSenior(params) {
        navigate("/RequestProductListSenior")
    }
    function toRequestMoveListSenior(params) {
        navigate("/RequestMoveListSenior")
    }
    return (
        <div className=''>
            <div className="py-12 bg-white mx-16">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">PoscoICT-5</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Senior Main Dashboard
                        </p>
                    </div>
                    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className="mt-10">
                            <p className='text-xl text-center font-bold mb-3'>물류 입고 승인대기</p>
                            <p className='text-md text-center mb-3' onClick={() => { toRequestProductListSenior() }}>전체보기</p>
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestStoredSenior />
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <GraphDonutSenior />
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <p className='text-xl text-center font-bold mb-3'>물류 출고 승인대기</p>
                            <p className='text-md text-center mb-3' onClick={() => { toRequestProductListSenior() }}>전체보기</p>
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestTakenoutSenior />
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <GraphBarStored />
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <p className='text-xl text-center font-bold mb-3'>물류 창고이동 승인대기</p>
                            <p className='text-md text-center mb-3' onClick={() => { toRequestMoveListSenior() }}>전체보기</p>
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestedMoveSenior />
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <GraphBarWarehouse />
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDashboardSenior