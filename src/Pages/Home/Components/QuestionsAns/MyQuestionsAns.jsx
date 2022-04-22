import React, { useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import { FaSortUp } from "react-icons/fa";

const MyQuestionsAns = ({ question, answer }) => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className="questions">
                <div className="question">
                    <div className="main-q">
                        <p>{question}</p>
                        <div className="icon" onClick={() => setShow(!show)}>
                            {show ? <FaSortUp className='icon-plus' /> : <AiFillCaretDown className='icon-minus' />}
                        </div>
                    </div>
                    <div className="answer">
                        {show && <p className="ans">{answer}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyQuestionsAns;