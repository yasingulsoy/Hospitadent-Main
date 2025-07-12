import React from 'react'

const Heading = ({title}) => {
  return (
    <>
     <h2
          className="font-extrabold text-2xl md:text-4xl text-primary mb-10 text-center capitalize font-[Montserrat] tracking-tight"
        >
          {title}
        </h2>
    </>
  )
}

export default Heading