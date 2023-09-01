const express = require('express')
const {
    createAssessment,
    getAssessments, 
    getAssessment,
    deleteAssessment,
    updateAssessment
} = require('../controllers/assessmentController')

const requireAuth = require('../middleware/requireAuth')


const router = express.Router()
//require auth for all 
router.use(requireAuth)

router.get('/', getAssessments)

router.get('/:id', getAssessment)

router.post('/', createAssessment)

router.delete('/:id', deleteAssessment)

router.patch('/:id', updateAssessment)

module.exports = router