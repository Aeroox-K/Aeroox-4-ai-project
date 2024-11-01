import React, { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import './navbar.css'; 
import { Link } from 'react-router-dom/cjs/react-router-dom';
import logo from '../../assets/logo-main.png';


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wax3">What is AEROOX-4</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)


const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState (false);

  return (
    <div className='navbar'>
      <div className='navbar-links_logo' >
            <img src={logo} alt="logo" />
          </div>
          
        <div className='navbar-links'>
          
          <div className='navbar-links_container' >
          <Menu />
          </div>
        </div>

        <div className='navbar-sign' >
          <Link to= "signin" > <p>Sign In</p> </Link>
          <Link to = "signup"> <button type='button'>Sign Up</button> </Link>
        </div>
        <div className='navbar-menu'>
        {toggleMenu
              ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
              : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true) } />
            }
            {toggleMenu && (
              <div className="navbar-menu_container scale-up-center">
                <div className="navbar-menu_container-links">
                <Menu />
                  <div className="navbar-menu_container-links-sign">
                  <Link to= "signin" > <p>Sign In</p> </Link>
                  <Link to = "signup"> <button type='button'>Sign Up</button> </Link>
                  </div>
                </div>
              </div>
            )}
        </div>
    </div>
  )
}

export default Navbar





























// import React, { useState } from 'react';
// import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
// import './navbar.css'; 
// import { Link } from 'react-router-dom/cjs/react-router-dom';
// import logo from '../../assets/logo-main.png';

// const Menu = () => (
//   <>
//     <p><a href="#home">Home</a></p>
//     <p><a href="#wax3">What is AEROOX-4</a></p>
//     <p><a href="#blog">Library</a></p>
//   </>
// )

// const Navbar = () => {

//   const [toggleMenu, setToggleMenu] = useState (false);

//   return (
    
//     <div className='navbar'>
      
//       <div className="navbar-links"> 
//       <div className="navbar-links_logo">
//         <Link to="/"><img src={logo} alt="logo" /></Link>
//         </div>  

//         <div className="navbar-links_container">
//         <Menu />
//         </div>

//         <div className="navbar-sign">
//             <Link to= "signin" > <p>Sign In</p> </Link>
//             <Link to = "signup"> <button type='button'>Sign Up</button> </Link>
//         </div>
//       </div>

      
       
//         <div className="navbar-menu">
//             {toggleMenu
//               ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
//               : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true) } />
//             }
//             {toggleMenu && (
//               <div className="navbar-menu_container scale-up-center">
//                 <div className="navbar-menu_container-links">
//                 <Menu />
  //                 <div className="navbar-menu_container-links-sign">
  //                 <Link to= "signin" > <p>Sign In</p> </Link>
  //                 <Link to = "signup"> <button type='button'>Sign Up</button> </Link>
  //                 </div>
//                 </div>
//               </div>
//             )}
//         </div>

//     </div>
//   ) 
// }

// export default Navbar