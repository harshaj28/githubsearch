import React,{useContext,useState} from "react";
import { Container } from "reactstrap";
import { Collapse,
    NavItem,
    Navbar,
    NavbarToggler,
    Nav,NavLink,NavbarText,
    NavbarBrand

} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import logo from "../logo.png"
import {FaGithub} from "react-icons/fa"

const Header=()=>{
    const context= useContext(UserContext);

    const [isOpen,setIsOpen]= useState(false);

    const toggle=()=> setIsOpen(!isOpen)
    return(
        <Navbar color="black" dark expand="md">
            <NavbarBrand>
                <Link to="/githubsearch" className="text-center text-white"><FaGithub style={{marginLeft:"10px",height:"30px",width:"30px"}}></FaGithub> </Link>
            </NavbarBrand>
            <NavbarText className="text-white text-center">
                {
                    context.user?.email ? "Hello 👋 "+context.user.email :" Hello User 👋"
                }
            </NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav style={{marginLeft:"auto"}} navbar>
                    {
                        context.user ? (<NavItem>
                            <NavLink 
                            onClick={()=>(
                                context.setUser(null)
                        )}
                            className="text-white">
                            LogOut
                            </NavLink>
                        </NavItem>):(
                            <>
                            <NavItem>
                            <NavLink tag={Link} to="/signup" className="text-white">SignUp</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink tag={Link} to="/signin" className="text-white">SignIn</NavLink>
                            </NavItem>
                            </>
                        )
                    }
                    
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;