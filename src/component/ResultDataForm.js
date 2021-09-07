import React from 'react';


const ResultDataForm = ({ result, EntryID }) => {
    const found = result.find(element => element.keyid === EntryID);

    return (
        <>
            <div className='Result1'>
                <h2>產源資料</h2>
                <div>
                    {
                        found.formContent.map(resultitem => {
                            return (
                                <div>
                                    <div className='Result3'>
                                        <div >序號:
                                            <span className='ans'>{resultitem.id}</span>
                                        </div>
                                        <div>委託單位:
                                            <span className='ans'>{resultitem.place}</span>
                                        </div>
                                        <div>產源地址:
                                            <span className='ans'>{resultitem.ads}</span>
                                        </div>
                                        <div>產源電話:
                                            <span className='ans'>{resultitem.tel}</span>
                                        </div>
                                        <div>數量預估(桶數):
                                            <span className='ans'>{resultitem.bucketCount}</span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default ResultDataForm;