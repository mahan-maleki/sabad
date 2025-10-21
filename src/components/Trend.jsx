import React from 'react'

function Trend(props) {
    return (
        <>
            <div className="col-1 bg-danger rounded-2 mx-1 p-2 d-flex justify-content-around">
                <div className='bg-white w-25 h-100 d-flex justify-content-center align-items-center shadow rounded-3'>
                    <span>#</span>
                </div>
                <span className='text-center text-white border-bottom border-2 border-danger-subtle'>{props.title}</span>
            </div>
        </>
    )
}

export default Trend