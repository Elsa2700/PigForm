import React from 'react';
import Datetime from 'react-datetime';
import FormListItem from './FormListItem';


const FormList = (
    {todos, value,
    handleButtonClick,
    handleInputChange,
    handleInputDateChange,
    handleDeleteTodo}) => {

    return (
        <div>
            <form className='formSumit'>
                <button onClick={handleButtonClick} >新增欄位</button>
                <div className='myForm'>
                    <table>
                        <thead>
                            <tr>
                                <th>序號</th>
                                <th>委託單位</th>
                                <th>產源地址</th>
                                <th>產源電話</th>
                                <th>數量預估(桶數)</th>
                                <th>委託者(產源)簽章</th>
                                <th>刪除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{todos.id}</td>
                                <td><input placeholder='O O餐館' name='place' value={value.place} onChange={handleInputChange} checked/></td>
                                <td><input placeholder='中壢區O路O號' name='ads' value={value.ads} onChange={handleInputChange} checked/></td>
                                <td><input placeholder='03-12345678' name='tel' value={value.tel} onChange={handleInputChange} checked/></td>
                                <td><input placeholder='0.5' name='weight' value={value.weight} onChange={handleInputChange} checked /></td>
                                <td><Datetime placeholder='O年O月O日' dateFormat="YYYY-MM-DD" timeFormat={false} onChange={handleInputDateChange} checked/></td>
                                <td><i className="trash alternate outline icon"></i></td>
                            </tr>
                            {
                                todos.map(todo =>
                                    <FormListItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo}/>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </form>
            <hr />
        </div>
    )

}




export default FormList;