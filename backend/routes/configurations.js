const express = require('express')
const {
    createConfiguration,
    getConfigurations, 
    getConfiguration,
    deleteConfiguration,
    updateConfiguration
} = require('../controllers/configurationController')

//const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

//require auth for all 
//router.patch(requireAuth)

router.get('/', getConfigurations)

router.get('/:id', getConfiguration)

router.post('/', createConfiguration)

router.delete('/:id', deleteConfiguration)

router.patch('/:id', updateConfiguration)

module.exports = router