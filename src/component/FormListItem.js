import React from 'react';
import moment from 'moment';



const FormListItem = ({ todo, handleDeleteTodo }) => {


    return (
        <tr>
            <td>{todo.id}</td>
            <td>{todo.place}</td>
            <td>{todo.ads}</td>
            <td>{todo.tel}</td>
            <td>{todo.bucketCount}</td>
            <td>{moment(todo.time).format("YYYY-MM-DD") === 'Invalid date' ? '' : moment(todo.time).format("YYYY-MM-DD")}</td>
            <td><i onClick={() => { handleDeleteTodo(todo.id) }} className="trash alternate outline icon"></i></td>
        </tr>
    )
}

export default FormListItem;
