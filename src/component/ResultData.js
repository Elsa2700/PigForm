import React from 'react';

const ResultData = ({ result, bucketSum }) => {
    console.log(result)
    return (
        <div className='Result'>
            <h1>當日統計結果</h1>
            <div className='Result1'>
                <h2>先趨科進場報告</h2>
                <div>進場家次:</div>
                <div>進場車次:</div>
                <div>進場量:</div>

            </div>
            <h1>當日進場單號</h1>
            <div className='Result1'>
                <h2>單號基本資訊</h2>
                <div>
                    {
                        result.map(resultitem => {
                            return (
                                <div className='Result2'>
                                    <div>
                                        *進場單號:<div className='ans'>{resultitem.basicContent[0].entryID}</div>
                                    </div>
                                    <div>
                                        清除或再利用機構:<div className='ans'>{resultitem.basicContent[0].instruction}</div>
                                    </div>
                                    <div>
                                        進場時間:<div className='ans'>{resultitem.basicContent[0].entrytime}</div>
                                    </div>
                                    <div>
                                        清運人員名稱:<div className='ans'>{resultitem.basicContent[0].name}</div>
                                    </div>
                                    <div>
                                        車號:<div className='ans'>{resultitem.basicContent[0].carName}</div>
                                    </div>
                                    <div>
                                        車輛里程數-上工時里程(公里):<div className='ans'>{resultitem.basicContent[0].startDistance}公里</div>
                                    </div>
                                    <div>
                                        車輛里程數-進先趨科里程(公里):<div className='ans'>{resultitem.basicContent[0].entryDistance}公里</div>
                                    </div>
                                    <div>
                                        *淨重(公噸)(依磅單填寫):<div className='ans'>{resultitem.basicContent[0].netweight}公噸</div>
                                    </div>
                                    <div>
                                        產源家數:<div className='ans'>{resultitem.basicContent[0].count}家</div>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
            <div className='Result1'>
                <h2>產源資料</h2>
                <div>
                    {
                        result[0].formContent.map(resultitem => {
                            return (
                                <div>
                                    <div className='Result2'>
                                        <div>序號:{resultitem.id}</div>
                                        <div>委託單位:{resultitem.formContent.place}</div>
                                        <div>產源地址:{resultitem.formContent.ads}</div>
                                        <div>產源電話:{resultitem.formContent.tel}</div>
                                        <div>數量預估(桶數):{resultitem.formContent.weight}桶</div>
                                    </div>

                                </div>
                            )
                        })
                    }
                    <div>進場總桶數:{bucketSum}桶</div>
                </div>


            </div>
        </div>

    )
}
export default ResultData;