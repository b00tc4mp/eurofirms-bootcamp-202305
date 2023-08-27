//const { User, Test, Answer } = require('../data/index')
const { validateId } = require('./helpers/validators')
const retrieveStudentListTests = require('./retrieveStudentListTests')

function retrieveArrayStudentTests(userId) {
    validateId(userId)

    return retrieveStudentListTests(userId)
        .then(answers => {
            const tests = []

            /* The code is iterating over each element in the `answers` array. For each `answer`, it checks
            if there is already a test with the same `id` in the `tests` array. If not, it creates a new
            array `ansList` and adds the `description` of the `answer` to it. Then, it assigns the
            `ansList` to the `ans` property of the `answer.test` object and adds the `answer.test` object
            to the `tests` array. */
            answers.forEach(answer => {
                if (!tests.some(test => test.id === answer.test.id)) {
                    const ansList = []
                    const obj = {
                        description: answer.description,
                        score: answer.score ? answer.score : 'without score',
                        assessment: answer.assessment ? answer.assessment : 'without assessment'
                    }
                    ansList.push(obj)
                    answer.test.ans = ansList       
                    tests.push(answer.test)
                } else {
                    const index = tests.findIndex((test) => test.id === answer.test.id)
                    const obj = {
                        description: answer.description,
                        score: answer.score ? answer.score : 'without score',
                        assessment: answer.assessment ? answer.assessment : 'without assessment'
                    }
                    tests[index].ans.push(obj)

                }
            })
            return tests
            // id, subjet, title, ans arrayof(descriptions)
        })
}
module.exports = retrieveArrayStudentTests