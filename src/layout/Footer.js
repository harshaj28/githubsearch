import React from "react";
import { Container } from "reactstrap";

const Footer=()=>{
    return(
        <div>
        <Container 
        fluid
        tag="footer"
        className="text-center bg-black text-white text-uppercase fixed-bottom p-1 "
        >
            GitHub Search App Using FireBase 
            <span className="text-end">&nbsp; ©Harshaj</span>
        </Container>
        </div>
    )
}


export default Footer