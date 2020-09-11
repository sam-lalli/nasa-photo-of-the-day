import React from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
    100%{
        opacity: 1;
        transform: scale(1);
    }
`

const Footer = props =>{
    const { image } = props

    const StyledFooter = styled.div`
    background-color: ${props => props.theme.darkBluePalette};
    color: ${props => props.goldPalette};
    height: 19.5vh;
    justify-content: center;
    opacity: 0;
    animation: ${kf} 2s forwards;
    font-display: center;
    transform: scale(.5);

    p{
       padding: ${props => props.theme.smallPadding}; 
    }
    `


    return(
        <StyledFooter>
            <p>Copyright: {image.copyright}</p>
            <p>An App created by Sam Lalli using React.js</p>
        </StyledFooter>
    )

}

export default Footer