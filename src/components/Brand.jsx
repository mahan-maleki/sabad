import React from 'react'
import { NavLink } from 'react-router'

function Brand(props) {
    return (
        <>
            <div className="col-3 p-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={props.logo} alt="brand logo" width={60} />
                    </div>
                    <div className="col-12 mt-4 d-flex justify-content-center">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="col-12">
                        <NavLink to={props.link}>
                            <p className='text-center mt-3'>مشاهده برند</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand