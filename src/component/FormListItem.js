import React from 'react';
import moment from 'moment';



const FormListItem = ({todo, handleDeleteTodo }) => {


    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.formContent.place}</td>
            <td>{todo.formContent.ads}</td>
            <td>{todo.formContent.tel}</td>
            <td>{todo.formContent.weight}</td>
            <td>{moment(todo.formContent.time).format("YYYY-MM-DD")==='Invalid date'?'':moment(todo.formContent.time).format("YYYY-MM-DD")}</td>
            <td><i onClick={()=>{handleDeleteTodo(todo.id)}} className="trash alternate outline icon"></i></td>
        </tr>
    )
}

export default FormListItem;
