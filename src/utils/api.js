export const fetchQuestions = () => {
    return [
        {
            id: 1,
            question: "What number do array's start at?",
            answers: ["0", "1", "-1", "They don't start, they are born"]
        },
        {
            id: 2,
            question: "Which direction does the Sun rise in?",
            answers: ["East", "West", "North", "South"]
        },
        {
            id: 3,
            question: "How many states are there in the USA?",
            answers: ["0", "20", "40", "50"]
        },
        {
            id: 4,
            question: "What year was the film: 'The Dark Knight' released?",
            answers: ["2006", "2008", "2009", "2011"]
        },
        {
            id: 5,
            question: "What is a bannana?",
            answers: ["A fruit", "A herb", "A flower", "A vegetable"]
        }
    ]
}

export const fetchAnswers = () => {
    return [
        {
            id: 1,
            answer: "0"
        },
        {
            id: 2,
            answer: "East"
        },
        {
            id: 3,
            answer: "50"
        },
        {
            id: 4,
            answer: "2006"
        },
        {
            id: 5,
            answer: "A fruit"
        }
    ]
}