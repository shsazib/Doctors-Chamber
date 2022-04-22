import React, { useState } from 'react';

import QuestionsAnsAPI from './QuestionsAnsAPI';
import MyQuestionsAns from './MyQuestionsAns';


const QuestionsAns = () => {

    const [change, setChange] = useState(QuestionsAnsAPI);

    return (
        <>
            <div className="eighth-container">
                <h1>Have Some Questions?</h1>
                {
                    change.map((curElm) => {
                        const { id, question, answer } = curElm
                        return <MyQuestionsAns key={id} {...curElm} />
                    })
                }
            </div>
        </>
    )
}


export default QuestionsAns;