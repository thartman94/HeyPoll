import React from 'react'
import { useState } from 'react'
import AddQuestion from './AddQuestion'

const PollEditor = () => { 

    const [questions, setQuestions] = useState([])

    const addQuestion = (question) => {
        const id = questions.length + 1
        const newQuestion = {id, ...question}
        setQuestions([...questions, newQuestion])
        console.log(questions)
        
    }
    return (
        <div>
            <AddQuestion onAdd={addQuestion}>   
            </AddQuestion>

            {questions.map((question) => (
                <h3 key={question.id}>{question.text}</h3>
            ))}
            
        </div>
    )
}

export default PollEditor
