import React from 'react'
import Slider from './Slider'
import css from "./Home.module.css"
import EventCard from './EventCard'
import ProductCard from './ProductCard'
import More from './More'
import { CreditCard } from 'lucide-react'
import "./Home.css"
import Category from './Category'
import CompanyCard from './CompanyCard'

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
                        <img src="/sabad-card.png" alt="عکس سبد کارت" width={"70%"} className={css.card + " card rounded-4"} />
                        <div className={css.circle + " d-none d-lg-block"}></div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className='text-center h2'>دسته بندی <span className='bold border-bottom border-primary-subtle border-3'>صنف ها</span></h3>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="row d-flex justify-content-center">
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-salad-icon lucide-salad"><path d="M7 21h10" /><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" /><path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" /><path d="m13 12 4-4" /><path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" /></svg>} title="میوه و سبزیجات" />
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop-icon lucide-laptop"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" /><path d="M20.054 15.987H3.946" /></svg>} title="تکنولوژی" />
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paint-roller-icon lucide-paint-roller"><rect width="16" height="6" x="2" y="2" rx="2" /><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect width="4" height="6" x="8" y="16" rx="1" /></svg>} title="خدمات" />
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hammer-icon lucide-hammer"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" /><path d="m18 15 4-4" /><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" /></svg>} title="تعمیرات" />
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chef-hat-icon lucide-chef-hat"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" /><path d="M6 17h12" /></svg>} title="رستوران" />
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brush-icon lucide-brush"><path d="m11 10 3 3" /><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" /><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" /></svg>} title="هنر" />
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-piano-icon lucide-piano"><path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" /><path d="M2 14h20" /><path d="M6 14v4" /><path d="M10 14v4" /><path d="M14 14v4" /><path d="M18 14v4" /></svg>} title="موسیقی" />
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sofa-icon lucide-sofa"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" /><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" /><path d="M4 18v2" /><path d="M20 18v2" /><path d="M12 4v9" /></svg>} title="مبلمان" />
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volleyball-icon lucide-volleyball"><path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" /><path d="M12 12a12.6 12.6 0 0 1-8.7 5" /><path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" /><path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" /><path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" /><circle cx="12" cy="12" r="10" /></svg>} title="ورزش" />
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-icon lucide-book-open"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>} title="ادبیات" />
                            <Category link="#" icon={<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drama-icon lucide-drama"><path d="M10 11h.01" /><path d="M14 6h.01" /><path d="M18 6h.01" /><path d="M6.5 13.1h.01" /><path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" /><path d="M17.4 9.9c-.8.8-2 .8-2.8 0" /><path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" /><path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" /></svg>} title="سرگرمی" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-12 d-flex align-items-center px-5">
                        <div className={css.pointer}></div>
                        <h3 className='me-2'>پربازدیدترین <span className='border-bottom border-4 bold border-primary-subtle'>فروشگاه ها</span></h3>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="row p-4 d-flex justify-content-center justify-content-lg-start">
                            <CompanyCard logo="/logos/apple.svg" title="اپل" tag="تکنولوژی" link="#" color="#404040" />
                            <CompanyCard logo="/logos/apple.svg" title="ایران اپل" tag="تکنولوژی" link="#" color="#502034" />
                            <CompanyCard logo="/logos/apple.svg" title="اپل ایران" tag="تکنولوژی" link="#" color="#102040" />
                            <CompanyCard logo="/logos/apple.svg" title="اپلینو" tag="تکنولوژی" link="#" color="#505080" />
                            <More to="#" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home