import React from 'react'
import { NavLink } from 'react-router';
import styled from 'styled-components'

function EventCard(props) {

    const Event = styled.div`
        height: 300px;
        background-image: url(${props.image});
        background-position: center;
        background-size: cover;
        overflow: hidden;
    `;

    const EventInfo = styled.div`
        background: #00000080;
        backdrop-filter: blur(4px);
        width: 100%;
    `;

    return (
        <>
            <Event className="col-10 mb-3 rounded-3 p-0 d-flex align-items-end">
                <EventInfo className='py-2 pe-3'><NavLink to={props.link} className={"text-decoration-none text-white"}><h3 className='fs-5'>{props.title}</h3></NavLink></EventInfo>
            </Event>
        </>
    )
}

export default EventCard