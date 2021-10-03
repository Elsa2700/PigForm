import React from 'react';


const Statistic = ({ onClickYes, onClickNo, check, handleFormButtonClick }) => {

    return (
        <div className='myFormBtn'>
            <div className='Statistic'>
                {check ? (
                    <div>
                        <button onClick={onClickYes}>已確認</button>
                        <button onClick={onClickNo}>繼續修改不送資料</button>
                    </div>) : (
                    <div>
                        <input className='formSumitBasic' type='submit' value='送出表單' onClick={handleFormButtonClick} />
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Statistic;