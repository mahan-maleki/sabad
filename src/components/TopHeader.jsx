import React from 'react'
import css from "./TopHeader.module.css"
import { NavLink } from 'react-router'
import { LogIn, Fingerprint } from 'lucide-react'

function TopHeader() {
    return (
        <>
            <div className="container-fluid">
                <div className="row p-2">
                    <div className="col-12 col-lg-1 d-flex justify-content-center align-items-center">
                        <img src="/sabad-logo.png" alt="لوگوی وبسایت سبد" className={css.logo} />
                        <span className='me-2 extrablack'>ســبــد</span>
                    </div>
                    <div className="col-5 d-none d-lg-flex align-items-center justify-content-start">
                        <ul className='mb-0 d-flex justify-content-start'>
                            <li className='list-unstyled mx-3'><NavLink to={""} className={"link-dark text-decoration-none"}>فروشگاه</NavLink></li>
                            <li className='list-unstyled mx-3'><NavLink to={""} className={"link-dark text-decoration-none"}>بازار</NavLink></li>
                            <li className='list-unstyled mx-3'><NavLink to={""} className={"link-dark text-decoration-none"}>وبلاگ</NavLink></li>
                            <li className='list-unstyled mx-3'><NavLink to={""} className={"link-dark text-decoration-none"}>اشتراک</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-6 d-none d-lg-block">
                        <div className="row">
                            <div className="col-9 d-flex justify-content-end">
                                <button className='btn btn-dark rounded-2'><NavLink to={""} className="text-light text-decoration-none ms-3">ورود</NavLink><LogIn size={18} /></button>
                            </div>
                            <div className="col-3 d-flex justify-content-start pe-0">
                                <button className='btn btn-primary rounded-2'><NavLink to={""} className="text-light text-decoration-none ms-3">ثبت نام</NavLink><Fingerprint size={18} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader