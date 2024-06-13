import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

 function Header() {
  const navigate = useNavigate();
  const {logout} = useAuth();
  const [isAdmin,setIsAdmin] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem("r")!==null && localStorage.getItem("r")==="admin"){
      setIsAdmin(true);
    }
  },[])

  const handleLogout = ()=>{
    // console.log("Handle logout clicked");
    // const expiryDate = new Date(Date.now() + 0 * 1000);
    // document.cookie = `token=;expires=${expiryDate.toUTCString()}`;
    // localStorage.clear();
    // navigate("/signup")
    logout(navigate);
  }
  
  return (
    <Navbar expand="lg"  style={{ backgroundColor:"red" }}>
      <Container  style={{ backgroundColor:"red" }}>
        <Navbar.Brand href="#home"><img src="safar2.png" height={40} width={150} ></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" color="dark" style={{ fontSize: 25, color: "white" }}><b>Home</b></Nav.Link>
            <Nav.Link href="/aboutus" style={{ fontSize: 25, color: "white" }}><b>About</b></Nav.Link>
            <Nav.Link href="/" style={{ fontSize: 25, color: "white" }}><b>Contact</b></Nav.Link>
            {
              isAdmin&&(<Nav.Link href="/admin" style={{ fontSize: 25, color: "white" }}><b>Admin</b></Nav.Link>)
            }
            
          </Nav>
          <Nav>
            {
              document.cookie?(<Nav.Link><Button  onClick={handleLogout}>Logout</Button></Nav.Link>):(<Nav.Link href="/signup"><Button style={{color:"red","fontWeight":"bolder","backgroundColor":"white"}}>Sigin/Signup</Button></Nav.Link>)
            }
            <Nav.Link  href="/bookings"><Button style={{color:"red","fontWeight":"bolder","backgroundColor":"white"}} >Bookings</Button></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default Header;











// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function Header() {
//   return (
//     <Navbar  expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">
//         <img src="safar2.png" height={40} alt="Logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link  href='/'>
//               <b>Home</b>
//             </Nav.Link>
//             <Nav.Link href='/'>
//               <b>About</b>
//             </Nav.Link>
//             <Nav.Link  href='/'>
//               <b>Contact</b>
//             </Nav.Link>
//           </Nav>
//           <Nav>
//           <Nav.Link >
//                <Button>Signup</Button>
//              </Nav.Link>
//              <Nav.Link >
//                <Button>Login</Button>
//              </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;















