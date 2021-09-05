import React, { useState, useRef } from 'react';
import Header from './Header';
import Result from './Result';
import Nav from './Nav';
import FormList from './FormList';
import Statistic from './Statistic';
import db from '../firebase/firestore';
import moment from 'moment';



const HomePage = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            formContent: {
                place: '',
                ads: '',
                tel: '',
                weight: '',
                time: ''
            }
        }
    ]);
    const [carForm, setCarForm] = useState([
        {
            carId: 1,
            basicContent: {
                entryID: '',
                instruction: '',
                entrytime: '',
                name: '',
                carName: '',
                startDistance: '',
                entryDistance: '',
                netweight: '',
                count: ''
            }
        }

    ])

    const [value, setValue] = useState([]);
    
    const id = useRef(1);
    
    const addRecordData = (carForm, todos) => {
        db.collection("wasteData").doc(carForm[0].entryID).set({
            basicContent: carForm,
            formContent: todos,
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                window.location.reload();
            });
    }

    const handleFormButtonClick = (e) => {
        e.preventDefault();
        addRecordData(carForm, todos);

        //資料庫存取

    }

    const handleCarBasicButtonClick = (e) => {
        e.preventDefault();
        setCarForm([{
            entryID: 'TYDEP-110-' + value.entryID1 + '-' + value.entryID2,
            instruction: value.instruction,
            entrytime: moment(value.startTime).format("YYYY-MM-DD HH:mm:ss"),
            name: value.name,
            carName: value.carName,
            startDistance: value.startDistance,
            entryDistance: value.entryDistance,
            netweight: value.netweight,
            count: value.count
        }])
        setValue('');

    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        if (id.current === 1) {
            setTodos([{
                id: id.current,
                formContent: {
                    place: value.place,
                    ads: value.ads,
                    tel: value.tel,
                    weight: value.weight,
                    time: moment(value.startDate).format("YYYY-MM-DD")
                }
            }]);

            setValue('');
            id.current++;
        } else {
            setTodos([{
                id: id.current,
                formContent: {
                    place: value.place,
                    ads: value.ads,
                    tel: value.tel,
                    weight: value.weight,
                    time: moment(value.startDate).format("YYYY-MM-DD")
                }
            }, ...todos]);

            setValue('');
            id.current++;

        }

    }

    const handleInputCarBasicChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    const handleInputentrytimeChange = (date) => {
        setValue({
            ...value,
            startTime: date
        })

    }
    const handleInputChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const handleInputDateChange = (date) => {
        setValue({
            ...value,
            startDate: date
        })

    }
    const handleDeleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

   
    return (
        <>
            <Nav />
            <Header value={value}
                handleInputCarBasicChange={handleInputCarBasicChange}
                handleInputentrytimeChange={handleInputentrytimeChange}
                handleCarBasicButtonClick={handleCarBasicButtonClick} />
            <FormList todos={todos} value={value} id={id}
                handleButtonClick={handleButtonClick}
                handleInputChange={handleInputChange}
                handleDeleteTodo={handleDeleteTodo}
                handleInputDateChange={handleInputDateChange}
            />
            <Statistic carForm={carForm} todos={todos} handleFormButtonClick={handleFormButtonClick} />
            <div className='HomePageResult'>
                <Result />
            </div>
        </>
    )
}

export default HomePage;
