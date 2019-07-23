import React from "react"

const NotFound = ({history}) => {
    return (
        <>
        <h1>404</h1>   
        {/* history.goBack we destructored history off of props then are using a built in function called go back */}
        <h4 onClick={() => history.goBack()} >Click to go Back to your home</h4>
        </>
    )
}

export default NotFound