import React from 'react';
import {Link} from "react-router-dom";

const Nav = ()=>{
    return(
        <div className='nav-frame'>
            <Link to="/"><button>首頁</button></Link>
            <Link to="/Result"><button>顯示紀錄結果</button></Link>
            <hr/>
        </div>
    )
}

export default Nav;