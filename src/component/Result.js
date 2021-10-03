import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import db from '../firebase/firestore';
import ResultData from './ResultData';

const Result = () => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [navScroll, setNavScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        };
        window.addEventListener("scroll", onScroll);

    }, []);



    const getData = () => {
        db.collection("wasteData").get().then(
            (doc) => {
                const data = doc.docs.map((doc) => ({
                    ...doc.data(), keyid: doc.id
                }))
                setResult(data);
            }).then(() => {
                setIsLoading(false);
            }).catch((error) => {
                console.log("Error getting cached document:", error);
            });

    }
    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <Nav navScroll={navScroll} />
            {isLoading ? (<div>載入中...</div>) : (
                <ResultData result={result} isLoading={isLoading} />
            )}
        </>
    )
}

export default Result;