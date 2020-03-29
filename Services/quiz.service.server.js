const quiz = require('../Services/quizzes')
findAllQuizzes = () => quiz;
findAllQuizzesForACourse = (cid) => quiz.filter(quizz => quizz.cid === cid);
findQuizById = (id) => quiz.find(quizz => quizz._id === id);

module.exports = {
    findAllQuizzes,
    findQuizById,
    findAllQuizzesForACourse
}
