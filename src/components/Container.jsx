import React from 'react'

const Container = ({className,children,ref}) => {
  return (
    <div ref={ref} className={`m-auto lg:w-[1600px] ${className}`}>{children}</div>
  )
}

export default Container