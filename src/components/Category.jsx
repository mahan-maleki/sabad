import React from 'react'
import styled from 'styled-components'
import css from "./Category.module.css"
import { NavLink } from 'react-router';

function Category(props) {

    const IconCont = styled.div`
        width: 80px;
        height: 80px;
    `;

    return (
        <div className="col-4 col-md-3 col-lg-1 mx-1 mb-3">
            <div className="row d-flex justify-content-center">
                <NavLink to={props.link} className={"text-decoration-none text-dark"}>
                    <IconCont className={"col-12 p-2 d-flex justify-content-center align-items-center shadow-lg rounded-3 mx-auto " + css.iconCont}>
                        {props.icon}
                    </IconCont>
                    <div className="col-12 mt-3">
                        <h2 className='fs-5 link-dark text-center'>{props.title}</h2>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Category