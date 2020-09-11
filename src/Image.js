import React, { useState } from 'react'
import styled from 'styled-components'

const StyledImgContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: ${props => props.themeSmallMargin};

    div{
        width:35%;
        background-image: linear-gradient(to bottom right, #5d7dc3, #37345f);
        color: black;
        padding-left: 5%;
        padding-right: 5%;
        border: 2px solid ${props => props.theme.goldPalette};
        
    }

    img{
        width: 45%;
        border: 3px soild ${props => props.theme.goldPalette};
        height: 50vh;
    }

    p{
        font-size: .8rem;
        display: flex;
        align-items: center;
        font-weight: bold;
    }

    button{
        background-color: none;
    }

    `

    const Description = styled.div`
        background-color: red;
        color: red;
    `
// const StyledIMG = styled.img`
//     width: 100%;
//     background-color: ${props => props.theme.violetPalette};
//     padding: ${props => props.theme.smallPadding};
// `

const Image = props => {

    const { image } = props
    const [description, setDescription] =useState(false)

    const toggleDescription = () => {
        setDescription(!description)
    }

    
    
    return(
        <StyledImgContainer>
                <img src={image.hdurl} alt={image.copyright}></img>
            <div>
                <h2>Name:<br></br>{image.title}</h2>
                {
                 description ?   
                <div>    
                    <h2>Description:</h2>
                    <p>{image.explanation}</p>
                </div> 
                : null
                } 
                <button onClick={() => toggleDescription()}> View Description</button>
            </div>



        </StyledImgContainer>
    )


}

export default Image