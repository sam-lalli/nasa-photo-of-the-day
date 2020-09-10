import React from "react" 



const Header = props => {
    const { image } = props

    return(
        <div>
            <h1><span role="img" aria-label="rocketship" >🚀Experiance Space With The Nasa Photo of the Day🚀</span></h1>
            <p>today's date {image.date}</p>
            <p>"I think of space not as the final frontier but as the next frontier. Not as something to be conquered but to be explored."</p>
            <p>-Neil deGrasse Tyson-</p>
        </div>
    )
}

export default Header