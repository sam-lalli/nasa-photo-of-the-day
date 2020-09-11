import React from "react" 
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
    100%{
        opacity: 1;
        transform: scale(1);
    }
`

const Styledheader = styled.div`
    background-color: ${props => props.theme.darkBluePalette};
    justify-content: center;
    opacity: 0;
    animation: ${kf} 2s forwards;
    font-display: center;
    transform: scale(.5);

    h1 {
        color: ${props => props.theme.goldPalette};
        font-size: 2.2rem;
    }

    p {
        color: ${props => props.theme.greyPalette};
        font-size: 1.2rem;
    }
`



const Header = props => {
    const { image } = props

    return(
        <Styledheader>
            <h1><span role="img" aria-label="rocketship" >🚀Experiance Space With The Nasa Photo of the Day🚀</span></h1>
            <p>Today's Date {image.date}</p>
            <p>"I think of space not as the final frontier but as the next frontier. Not as something to be conquered but to be explored."</p>
            <p>-Neil deGrasse Tyson-</p>
        </Styledheader>
    )
}

export default Header