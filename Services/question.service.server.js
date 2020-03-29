const questions = require('../Services/questions')

findAllQuestions = () => questions;
findAllQuestionsByQuiz = (qid) => questions.filter(questions => questions.quizId === qid);

module.exports = {
    findAllQuestions,
    findAllQuestionsByQuiz
}
