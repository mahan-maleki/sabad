import React from 'react'
import css from "./BottomHeader.module.css"
import { NavLink } from 'react-router'
import Trend from './Trend'

function BottomHeader() {
    return (
        <>
            <div className="container-fluid bg-body-tertiary d-none d-lg-block">
                <div className="row p-3 d-flex align-items-center">
                    <div className="col-4">
                        <ul className='mb-0 d-flex justify-content-evenly'>
                            <li className={css.list}><NavLink to={""} className={"text-black text-decoration-none"}>راه های ارتباطی</NavLink></li>
                            <li className={css.list}><NavLink to={""} className={"text-black text-decoration-none"}>اشتراک سازمانی</NavLink></li>
                            <li className={css.list}><NavLink to={""} className={"text-black text-decoration-none"}>دریافت کارت اشتراک</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-8">
                        <div className="row d-flex justify-content-end">
                            <div className="col-3 d-flex justify-content-end align-items-center">
                                <span>صنف های ترند: </span>
                            </div>
                            <Trend title="رستوران" />
                            <Trend title="میوه" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomHeader