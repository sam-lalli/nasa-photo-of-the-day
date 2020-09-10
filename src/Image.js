import React from 'react'

const Image = props => {

    const { image } = props

    
    
    return(
        <div>
            <div>
                <h2>{image.title}</h2>
                <img src={image.hdurl} alt={image.copyright}></img>
            </div>
            <h3>{image.explanation}</h3>


        </div>
    )


}

export default Image