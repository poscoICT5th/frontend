import React from 'react'
import ListRequestStoredJunior from './ListRequestStoredJunior'
import ListRequestTakenoutJunior from './ListRequestTakenoutJunior'
import GraphBar from '../Common/GraphBar'
import GraphBarStored from '../Common/GraphBarStored'
import GraphBarWarehouse from '../Common/GraphBarWarehouse'
import GraphDonutJunior from './GraphDonutJunior'
import ListRequestMoveJunior from './ListRequestMoveJunior'
import { useNavigate } from 'react-router-dom'

function MainDashboardJunior() {
    let navigate = useNavigate();
    function toListRequestStoredJunior(params) {
        navigate("/RequestProductListJunior")
    }
    function toRequestMoveListJunior(params) {
        navigate("/RequestMoveListJunior")
    }
    return (
        <div className=''>
            <div className="py-12 bg-white mx-16">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">PoscoICT-5</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Junior Main Dashboard
                        </p>
                    </div>
                    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        <div className="mt-10">
                            <p className='text-xl text-center font-bold mb-3'>물류 입고 요청 현황</p>
                            <p className='text-md text-center mb-3' onClick={() => { toListRequestStoredJunior() }}>전체보기</p>

                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestStoredJunior />
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <GraphDonutJunior />
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <p className='text-xl text-center font-bold mb-3'>최근 출고 요청 현황</p>
                            <p className='text-md text-center mb-3' onClick={() => { toListRequestStoredJunior() }}>전체보기</p>
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestTakenoutJunior />
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
                            <p className='text-xl text-center font-bold mb-3'>물품 창고이동 요청대기</p>
                            <p className='text-md text-center mb-3' onClick={() => { toRequestMoveListJunior() }}>전체보기</p>
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestMoveJunior />
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

export default MainDashboardJunior