import React from 'react'
import { NavLink } from 'react-router'

function Post(props) {
    return (
        <>
            <div className="col-12 col-md-4 col-lg-3 mx-2 mb-2 rounded-3 bg-body-tertiary">
                <NavLink to={""} className={"text-decoration-none text-dark"}>
                    <div className="row">
                        <div className="col-12 p-3">
                            <img src={props.poster} alt="weblog post image" width={"100%"} className='rounded-3' />
                        </div>
                        <div className="col-12 mt-4">
                            <h4 className='mb-4'>{props.title}</h4>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default Post