import React from 'react'
import { Link } from 'react-scroll';
import { useSelector,useDispatch } from 'react-redux'
import { changeAppTheme } from '../../Redux/Reducers/ui/ui.action';
const Navbar = () => {
    const { isLight } = useSelector(({ ui }) => ui);
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-brand">
                            <Link className="nav-link text-white" to="Home" smooth={true}  >Users</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link onClick={()=>dispatch(changeAppTheme())} className="nav-link text-white" to="#"  >{isLight?<div><i className="fas fa-moon"></i> ModeToggle</div>:<div><i className="fas fa-sun"></i> ModeToggle</div>}</Link>
                        </li>
                    </ul>


                </div>
            </nav>
        </div>
    )
}

export default Navbar
