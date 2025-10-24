import React from 'react'
import Slider from './Slider'
import css from "./Home.module.css"
import EventCard from './EventCard'

function Home() {
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-lg-8">
                        <Slider />
                    </div>
                    <div className="col-4 d-none d-lg-block">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center">
                                <div className={css.pointer}></div>
                                <h3 className='me-2'>جدیدترین <span className='border-bottom border-4 bold border-primary-subtle'>ایونت ها</span></h3>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="row">
                                    <EventCard image="https://picsum.photos/800/400?3" title="جشنواره پائیزان - خرید به صرفه کالا های فصلی" link="#" />
                                    <EventCard image="https://picsum.photos/800/400?4" title="جشنواره خلیج فارس - خرید محصولات بومی مناطق خلیج فارس" link="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home