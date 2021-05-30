import React from 'react'
let footerStyle = {
    width: "100%",
    paddingTop:"10px",
    paddingBottom:"5px",
}
export const Footer = () => {
    return (
        <div className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">
                Todo List Created using React Js &nbsp; &copy; RK
            </p>
        </div>
    )
}
