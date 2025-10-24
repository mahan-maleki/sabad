import React from 'react'
import { NavLink } from 'react-router';
import styled from 'styled-components';
import { Star } from 'lucide-react';

function ProductCard(props) {

    const Card = styled.div`
        height: 400px !important;
    `;

    return (
        <>
            <Card className="col-12 col-lg-2 mx-2 border-1 border-dark border border-opacity-10 p-2 rounded-3 mb-2">
                <NavLink className={"text-decoration-none text-dark"} to={props.link}>
                    <div className="row">
                        <div className="col-12">
                            <img src={props.image} alt="product image" />
                        </div>
                        <div className="col-12 px-3">
                            <h3 className='fs-5'>{props.title}</h3>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='price fs-4'>{props.price}<span className='price me-2 fs-6 text-secondary'>تومانءء</span></p>
                                <div className='price d-flex align-items-center'><span className='price text-dark ms-1'>{props.rate}</span><Star color='#E18236' size={15} /></div>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </Card>
        </>
    )
}

export default ProductCard