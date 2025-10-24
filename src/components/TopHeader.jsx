import React from 'react'
import css from "./TopHeader.module.css"
import { NavLink } from 'react-router'
import { LogIn } from 'lucide-react'

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
                    <div className="col-6 d-none d-lg-flex justify-content-end">
                        <button className='btn btn-light'><NavLink to={""} className="text-decoration-none ms-2 text-dark">ورود | ثبت نام</NavLink><LogIn size={18} color='#404040' /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader