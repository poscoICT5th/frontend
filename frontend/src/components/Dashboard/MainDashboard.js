import React from 'react'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import ListRequestJunior from './ListRequestJunior'
import GraphDonut from './GraphDonut'
import GraphBar from './GraphBar'

function MainDashboard() {
    return (
        <div>
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">PoscoICT-5</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Main Dashboard
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className="mt-10">
                            입출고 현황
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestJunior />
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <GraphDonut />
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <GraphBar />

                                </div>
                            </dl>
                        </div>
                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <ListRequestJunior />
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainDashboard