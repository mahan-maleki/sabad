import React from 'react'
import { NavLink } from 'react-router';
import styled from 'styled-components'

function CompanyCard(props) {
    const LogoCont = styled.div`
        width: 100px;
        height: 100px;
        position: absolute;
        top: 80px;
        right: 34%;
    `;

    const ProfileCont = styled.div`
        width: 100%;
        height: 200px;
    `;

    const Company = styled.div`
        background-image: url(${props.background});
    `;

    return (
        <>
            <div className="col-9 col-md-4 col-lg-2 rounded-3 shadow-lg overflow-hidden mx-2 mb-3">
                <Company className="row position-relative">
                    <ProfileCont>
                        <LogoCont className='shadow-lg p-3 d-flex justify-content-center align-items-center rounded-4 z-2 bg-white'>
                            <img src={props.logo} alt="company logo" width={80} />
                        </LogoCont>
                    </ProfileCont>
                    <h3 className='text-center text-white extrablack mb-5 mt-3'>{props.title}</h3>
                    <div className='d-flex align-items-center justify-content-center bg-body-secondary p-2'>
                        <div className='p-2 bg-body-tertiary rounded-3'><span>#</span></div>
                        <p className='mb-0 me-4 price'>{props.tag}</p>
                    </div>
                    <NavLink to={""} className={"text-decoration-none text-white w-100 p-0"}><button className='w-100 btn btn-primary rounded-0 py-3 fs-6'>مشاهده فروشگاه</button></NavLink>
                </Company>
            </div>
        </>
    )
}

export default CompanyCard