import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Result from './Result';
import Nav from './Nav';
import FormList from './FormList';
import Statistic from './Statistic';
import db from '../firebase/firestore';
import moment from 'moment';



const HomePage = () => {
    const [isSubmit, setSubmit] = useState(false);
    const [check, setCheck] =useState(false);
    const [checked, setChecked] =useState(false);
    const [navScroll, setNavScroll] =useState(false);

  useEffect(() => {
    const onScroll = () => {
        console.log(window.scrollY)
        if(window.scrollY > 200){
            setNavScroll(true);
        }else{
            setNavScroll(false);
        }
    };
    window.addEventListener("scroll", onScroll);

  },[]);
    
    const [todos, setTodos] = useState([
        {
            id: 1,
            place: '',
            ads: '',
            tel: '',
            bucketCount: '',
            time: ''
        }
    ]);
    const [carForm, setCarForm] = useState([
        {
            entryID: 'TYDEP-110-1-1',
            instruction: '',
            entrytime: '',
            name: '',
            carName: '',
            startDistance: '',
            entryDistance: '',
            netweight: '',
            count: ''
        }

    ])

    const [value, setValue] = useState([]);

    const id = useRef(1);



    const addRecordData = (carForm, todos) => {

        if(Object.values(carForm[0]).includes(undefined && '')){
            alert('請填寫所有基本資料');
            window.location.reload();
        }
        db.collection("wasteData").doc(carForm[0].entryID).set({
            basicContent: carForm,
            formContent: todos,
        })
            .then(() => {
                alert('載入成功');
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
                window.location.reload();
            });
    }

    const checkYes = () =>{
        setChecked(true);
        if(Object.values(todos[0]).includes(undefined || '')){
            alert('請填寫所有資料');
        }else{
            addRecordData(carForm, todos);
        }
        
        
    }
    const checkNo = () =>{
        setChecked(false);
        return
    }
    

    const handleFormButtonClick = (e) => {
        e.preventDefault();
        setCheck(true);
        console.log(checked);

        //資料庫存取

    }

    const handleCarBasicButtonClick = (e) => {
        e.preventDefault();
        setSubmit(true);
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


    }


    const handleButtonClick = (e) => {
        e.preventDefault();
        if (id.current === 1) {
            setTodos([{
                id: id.current,
                place: value.place,
                ads: value.ads,
                tel: value.tel,
                bucketCount: value.bucketCount,
                time: moment(value.startDate).format("YYYY-MM-DD")
            }]);

            setValue('');
            id.current++;
        } else {
            setTodos([{
                id: id.current,
                place: value.place,
                ads: value.ads,
                tel: value.tel,
                bucketCount: value.bucketCount,
                time: moment(value.startDate).format("YYYY-MM-DD")

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
        <div>
            <Nav navScroll={navScroll}/>
            <Header value={value} isSubmit={isSubmit}
                handleInputCarBasicChange={handleInputCarBasicChange}
                handleInputentrytimeChange={handleInputentrytimeChange}
                handleCarBasicButtonClick={handleCarBasicButtonClick} />
            <FormList todos={todos} value={value} id={id}
                handleButtonClick={handleButtonClick}
                handleInputChange={handleInputChange}
                handleDeleteTodo={handleDeleteTodo}
                handleInputDateChange={handleInputDateChange}
            />
            <Statistic onClickYes={checkYes} onClickNo={checkNo} check={check} carForm={carForm} todos={todos} handleFormButtonClick={handleFormButtonClick} />
            <div className='HomePageResult'>
                <Result />
            </div>
        </div>
    )
}

export default HomePage;
