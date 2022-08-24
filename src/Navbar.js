import React from 'react';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
    // const [mode,setMode]=useState({

    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const modeFunction=()=>{
    //     setmodeDark('light');
    //     if(mode.color === 'white'){
    //         setMode({ 
    //             color:'white',
    //         backgroundColor:'black'})
    //     }
    //     else{
    //         setMode({ 
    //             color:'black',
    //         backgroundColor:'white'})
    //     }
    // }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid ">
                    <a className="navbar-brand " href="#">TextUtils</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode} />
                        <label className={`form-check-label text-${(props.mode==='light')?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {(props.mode==='light')?'dark':'light'} mode</label>
                    </div>
                </div>
            </nav>
        </>
    );
}
