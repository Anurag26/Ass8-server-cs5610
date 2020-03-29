const quizServices = require('../Services/quiz.service.server');

module.exports = function(app) {
    app.get('/', (req, res) => res.send('Hello world'));
    app.get('/api/quizzes', (req, res) => res.json(quizServices.findAllQuizzes()));
    app.get('/api/quizzes/:cid', (req,res) => res.json(quizServices.findAllQuizzesForACourse(req.params.cid)));
    app.get('/api/quizzes/:quizId', (req, res) => res.json(quizServices.findQuizById(req.params.quizId)));
}
