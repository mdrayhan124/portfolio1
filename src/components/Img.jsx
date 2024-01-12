import React from 'react'

const Img = ({className,src,alt,imgClassName}) => {
    return (
        <div className={className}>
            <picture>
                <img className={imgClassName} src={src} alt={alt} />
            </picture>
        </div>
    )
}

export default Img