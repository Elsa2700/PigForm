import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import db from '../firebase/firestore';
import ResultData from './ResultData';

const Result = () => {
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [bucketSum, setBucketSum] = useState(0);
    let bucketCount = 0;


    const getData = () => {
        setIsLoading(true);
        db.collection("wasteData").get().then(
            (doc) => {
                doc.docs.forEach(item => {
                    setResult([item.data()]);
                })
                result[0].formContent.forEach(bucket => {
                    bucketCount += parseFloat(bucket.formContent.weight);
                    setBucketSum(bucketCount)
                })
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
            <Nav />
            {isLoading ? (<div>載入中...</div>) : (
                <ResultData result={result} isLoading={isLoading} bucketSum={bucketSum} />
            )}
        </>
    )
}

export default Result;