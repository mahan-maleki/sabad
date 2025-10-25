import { SquareArrowLeft } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'

function More(props) {
    return (
        <>
            <div className="col-12 col-md-6 col-lg-1 bg-body-secondary d-flex justify-content-center align-items-center rounded-3">
                <NavLink to={props.to} className="text-decoration-none link-dark" >
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className='d-flex justify-content-center mb-4'>
                            <SquareArrowLeft size={50} color='#AAAAAA' strokeWidth={1.25} />
                        </div>
                        <h4 className="fs-4 text-center">مشاهده بیشتر</h4>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default More