import React from 'react';
import "react-datetime/css/react-datetime.css"; //https://www.npmjs.com/package/react-datetime
import '../style/homepage.css';
import Datetime from 'react-datetime';

const Header = ({
    value,
    handleInputCarBasicChange,
    handleInputentrytimeChange,
    handleCarBasicButtonClick }) => {

    return (
        <>
            <h1>桃園市廚餘清運紀錄表</h1>
            <form className='form-frame'>
                <div className='form-row1'>
                    <label>
                        <div className='star'>*進場單號:</div>
                        <div>
                        TYDEP-110-
                        <span>
                            <input value={value.entryID1} onChange={handleInputCarBasicChange} name='entryID1' type='text' placeholder='月日' required />
                        </span>
                        -
                        <span>
                            <input value={value.entryID2} onChange={handleInputCarBasicChange} name='entryID2' type='text' placeholder='序號' required />
                        </span>
                        </div>
                    </label>
                </div>

                <div className='form-row2'>
                    <label>
                        <div>清除或再利用機構:</div>
                        <input value={value.instruction} onChange={handleInputCarBasicChange} required name='instruction' type='text' placeholder='OO畜牧場' />
                    </label>
                    <label>
                        <div>進場時間:</div>
                        <Datetime placeholder='O年O月O日O時' dateFormat="YYYY-MM-DD HH:mm:ss" onChange={handleInputentrytimeChange} required />
                    </label>
                </div>

                <div className='form-row3'>
                    <label>
                        清運人員名稱:
                        <input value={value.name} onChange={handleInputCarBasicChange} required name='name' type='text' placeholder='王 O O' />
                    </label>
                    <label>
                        車號:
                        <input value={value.carName} onChange={handleInputCarBasicChange} name='carName' type='text' placeholder='ABC-123' />
                    </label>
                    <label>
                        <div className='form-row3-1'>
                            <div className='form-row3-1-name'>車輛里程數:</div>
                            <div className='form-row3-2'>
                                <div>
                                    <span>上工時里程(公里):</span>
                                    <input value={value.startDistance} onChange={handleInputCarBasicChange} name='startDistance' type='number' />
                                </div>
                                <div>
                                    <span>進先趨科里程(公里):</span>
                                    <input value={value.entryDistance} onChange={handleInputCarBasicChange} name='entryDistance' type='number' />
                                </div>
                            </div>
                        </div>
                    </label>
                </div>

                <div className='form-row4'>
                    <label>
                        <div className='star'>*淨重(公噸)(依磅單填寫):</div>
                        <input value={value.netweight} onChange={handleInputCarBasicChange} name='netweight' placeholder='1.3' type='number' />
                    </label>
                    <label>
                        產源家數:
                        <input value={value.count} onChange={handleInputCarBasicChange} name='count' placeholder='8' type='number' />
                    </label>
                </div>
                <div className='formSumitBasic'><input type='submit' value='儲存基本資料' onClick={handleCarBasicButtonClick} /></div>
            </form>

            <hr />
        </>
    )
}

export default Header;