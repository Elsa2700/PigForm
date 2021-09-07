import React, { useState, useEffect } from 'react';
import ResultDataBasic from './ResultDataBasic';
import ResultDataForm from './ResultDataForm';

const ResultData = ({ result }) => {
    const [EntryID, setEntryID] = useState('');
    const [BucketSum, setBucketSum] = useState(0);
  
  
    const calcu = () => {
        let BucketCount = 0;
        result.forEach(buckets => {
            buckets.formContent.forEach(bucket =>{
                if(!isNaN(parseFloat(bucket.bucketCount))){
                    BucketCount += parseFloat(bucket.bucketCount);
                }
            })
        })
        setBucketSum(BucketCount)
    }
    useEffect(() => {
        calcu();
    })


    return (
        <div>
            <div className='Result'>
                <h1 className='head'>當日統計結果</h1>
                <div className='Result1'>
                    <h2>先趨科進場報告</h2>
                    <div>進場家次:{result.length}家</div>
                    <div>進場車次:{result.length}車</div>
                    <div>進場車次編號:{
                        result.map(car => {
                            return (
                                <span className='ReportCar'
                                    onClick={(e) => { setEntryID(e.target.innerHTML) }}>
                                    {car.basicContent[0].entryID}
                                </span>
                            )
                        })
                    }
                    </div>
                    <div>進場總量:{BucketSum}桶</div>
                </div>
                {EntryID === '' ? (
                    <div className='blank'>
                        <i className="inbox icon"></i>
                    </div>) : (
                    <div>
                        <ResultDataBasic  result={result} EntryID={EntryID} />
                        <ResultDataForm  result={result} EntryID={EntryID} />
                    </div>)}
            </div>
        </div>

    )
}
export default ResultData;