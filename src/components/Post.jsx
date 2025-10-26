import React from 'react'
import { NavLink } from 'react-router'

function Post(props) {
    return (
        <>
            <div className="col-12 col-md-4 col-lg-3 mx-2 mb-2 rounded-3 bg-body-tertiary">
                <NavLink to={""} className={"text-decoration-none text-dark"}>
                    <div className="row">
                        <div className="col-12">
                            <img src={props.image} alt="weblog post image" width={100} />
                        </div>
                        <div className="col-12 mt-4">
                            <h3>{props.title}</h3>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default Post