import React from 'react'

const Footer = props =>{
    const { image } = props


    return(
        <div>
            <p>Copyright: {image.copyright}</p>
            <p>An App created by Sam Lalli using React.js</p>
        </div>
    )

}

export default Footer