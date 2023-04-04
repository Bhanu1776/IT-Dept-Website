import React from 'react'

const NewEventsCards = (props) => {
  return (
    <>
      <div className='shadow-xl rounded-lg'>
        <img className='h-[65%] w-full rounded-tl-lg rounded-tr-lg' src={props.cardimg} alt="" />
        <div className='p-1'>
            <h1 className='font-semibold'>{props.eventname}</h1>
            <h1 className='md:text-[13px] xxsm:text-[10px] 2xl:text-[20px]'>It is a long established fact that a reader will be distracted by the readable content</h1>
        </div>
      </div>
    </>
  )
}

export default NewEventsCards
