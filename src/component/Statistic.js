import React, { useEffect,useState } from 'react';
import db from '../firebase/firestore';


const Statistic = ({ bucketSum, handleFormButtonClick }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [buckets, setbuckets] = useState(0);


    const getData = () => {
        setIsLoading(true);
        db.collection("wasteData").get().then(
            (doc) => {
                doc.docs.forEach(item => {
                    setbuckets([item.data()]);
                })
                
                console.log("Cached document data:");
                setIsLoading(false);

            }).catch((error) => {
                console.log("Error getting cached document:", error);
            });

    }
    useEffect(() => {
        getData();


    }, [])



    return (
        <div className='myForm'>
            <div className='Statistic'>
                {isLoading ? (<div>載入中...</div>) : (
                    <div>
                        進場總統數:{bucketSum}桶
                        <div className='formSumitBasic'><input type='submit' value='送出表單' onClick={handleFormButtonClick} /></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Statistic;