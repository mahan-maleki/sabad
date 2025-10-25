import React from 'react'
import Slider from './Slider'
import css from "./Home.module.css"
import EventCard from './EventCard'
import ProductCard from './ProductCard'
import More from './More'
import { CreditCard } from 'lucide-react'
import "./Home.css"

function Home() {
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-lg-8">
                        <Slider />
                    </div>
                    <div className="col-12 col-lg-4 d-lg-block">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center">
                                <div className={css.pointer}></div>
                                <h3 className='me-2'>جدیدترین <span className='border-bottom border-4 bold border-primary-subtle'>ایونت ها</span></h3>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="row d-flex justify-content-center justify-content-lg-start">
                                    <EventCard image="https://picsum.photos/800/400?2" title="جشنواره پائیزان - خرید به صرفه کالا های فصلی" link="#" />
                                    <EventCard image="https://picsum.photos/800/400?4" title="جشنواره خلیج فارس - خرید محصولات بومی مناطق خلیج فارس" link="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4">
                <div className="row p-2">
                    <div className="col-12 d-flex align-items-center">
                        <div className={css.pointer}></div>
                        <h3 className='me-2'>پرفروش ترین <span className='border-bottom border-4 bold border-primary-subtle'>محصولات</span></h3>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="row d-flex justify-content-center justify-content-lg-start">
                            <ProductCard image="/b52f9e5ac0e251729f27ac4f7176068344197b6f_1754241710.webp" title="لپتاپ 16.2 اینچی مک بوک پرو" link="#" price="100,000,000" rate="4.5" />
                            <ProductCard image="/b52f9e5ac0e251729f27ac4f7176068344197b6f_1754241710.webp" title="لپتاپ 16.2 اینچی مک بوک پرو" link="#" price="102,500,000" rate="4.7" />
                            <ProductCard image="/b52f9e5ac0e251729f27ac4f7176068344197b6f_1754241710.webp" title="لپتاپ 16.2 اینچی مک بوک پرو" link="#" price="105,999,000" rate="4.2" />
                            <ProductCard image="/b52f9e5ac0e251729f27ac4f7176068344197b6f_1754241710.webp" title="لپتاپ 16.2 اینچی مک بوک پرو" link="#" price="99,989,000" rate="3.5" />
                            <ProductCard image="/b52f9e5ac0e251729f27ac4f7176068344197b6f_1754241710.webp" title="لپتاپ 16.2 اینچی مک بوک پرو" link="#" price="130,000,000" rate="5" />
                            <More to="#" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12 col-lg-7 bg-dark p-5 d-flex justify-content-center justify-content-lg-start">
                        <div className="row">
                            <div className="col-12">
                                <h2 className='extrablack fs-1 text-white'><span className='text-white'>با</span> <span className='text-primary'>ســبــد کــارت</span></h2>
                                <p className='mt-4 fs-2 text-white'>از <span className='bold'>فروشگاه های سبد</span>،<br /> <span className='text-primary border-bottom border-3 border-primary-subtle'>حضوری</span> خرید کنید</p>
                            </div>
                            <div className="col-12 mt-4">
                                <button className='btn btn-primary px-4 py-3 rounded-3'>دریافت سبد کارت <CreditCard className='me-2' /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 bg-body-secondary p-5">
                        <div className={css.square + " d-none d-lg-block"}></div>
                        <img src="/sabad-card.png" alt="عکس سبد کارت" width={"70%"} className={css.card + " card"} />
                        <div className={css.circle + " d-none d-lg-block"}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home