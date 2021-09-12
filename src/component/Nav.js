import React from 'react';
import {Link} from "react-router-dom";

const Nav = ({navScroll})=>{
    console.log('123',navScroll)
    return(
        <div className={navScroll? 'off':'' }>
        <div className='nav-frame' >
            <Link to="/"><button>首頁</button></Link>
            <Link to="/Result"><button>顯示紀錄結果</button></Link>
            <h1>桃園市廚餘清運紀錄表</h1>
            <hr/>
        </div>
        </div>
    )
}

export default Nav;