import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={`m-auto w-[1600px] ${className}`}>{children}</div>
  )
}

export default Container