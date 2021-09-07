import React, { useState, useEffect } from 'react';

const ResultDataBasic = ({ result, EntryID }) => {
    const [BucketFormSum, setBucketFormSum] = useState(0);
    const found = result.find(element => element.keyid === EntryID);
    const calcu = () => {
        let BucketCount = 0;
        found.formContent.forEach(bucket => {
            if (!isNaN(parseFloat(bucket.bucketCount))) {
                BucketCount += parseFloat(bucket.bucketCount);
            }
        })
        setBucketFormSum(BucketCount)
    }
    useEffect(() => {
        calcu();
    })

    return (
        <>
            <h1 className='head'>當日進場單號</h1>
            <div className='Result1'>
                <h2>單號基本資訊</h2>
                <div>

                    <div className='Result2'>
                        <div>
                            *進場單號:<span className='ans'>{found.basicContent[0].entryID}</span>
                        </div>
                        <div>
                            清除或再利用機構:<span className='ans'>{found.basicContent[0].instruction}</span>
                        </div>
                        <div>
                            進場時間:<span className='ans'>{found.basicContent[0].entrytime}</span>
                        </div>
                        <div>
                            清運人員名稱:<span className='ans'>{found.basicContent[0].name}</span>
                        </div>
                        <div>
                            車號:<span className='ans'>{found.basicContent[0].carName}</span>
                        </div>
                        <div>
                            車輛里程數-上工時里程(公里):<span className='ans'>{found.basicContent[0].startDistance}公里</span>
                        </div>
                        <div>
                            車輛里程數-進先趨科里程(公里):<span className='ans'>{found.basicContent[0].entryDistance}公里</span>
                        </div>
                        <div>
                            *淨重(公噸)(依磅單填寫):<span className='ans'>{found.basicContent[0].netweight}公噸</span>
                        </div>
                        <div>
                            產源家數:<span className='ans'>{found.basicContent[0].count}家</span>
                        </div>
                        <div>
                            總桶數:<span className='ans'>{BucketFormSum}桶</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default ResultDataBasic;