const questionService = require('../Services/question.service.server');

module.exports = function(app) {
    app.get('/api/questions', (req, res) => res.json(questionService.findAllQuestions()));
    app.get('/api/quizzes/:qid/questions', (req,res) => res.json(questionService.findAllQuestionsByQuiz(req.params.qid)));
}
