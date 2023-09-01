const Configuration = require('../models/configurationModel')
const mongoose = require('mongoose')
const UserModel = require('../models/configurationModel')

    //get all configurations
    const getConfigurations = async (req, res) => {

    // const user_id = req.user._id
    const configurations = await Configuration.find({ user_id }).sort({ createdAt: -1 })

    res.status(200).json(configurations)
}

//get a single configuration
const getConfiguration = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such configuration' })
    }

    const configuration = await Configuration.findById(id)

    if (!configuration) {
        return res.status(400).json({ error: 'No such configuration' })
    }
    res.status(200).json(configuration)
}


//create new configuration
const createConfiguration = async (req, res) => {
    const {     
        oe_veryLow_low,
        oe_veryLow_high,
        oe_low_low, 
        oe_low_high,
        oe_medium_low,
        oe_medium_high,
        oe_high_low,
        oe_high_high,
        oe_veryHigh_low,
        oe_veryHigh_high,
        cs_veryLow_low,
        cs_veryLow_high,
        cs_low_low,
        cs_low_high,
        cs_medium_low,
        cs_medium_high,
        cs_high_low,
        cs_high_high,
        cs_veryHigh_low,
        cs_veryHigh_high
    
    } = req.body

    // let emptyFields = []
    // if (!oe_veryLow_low) {
    //     emptyFields.push('oe_veryLow_low')
    // }
    // if (!oe_veryLow_high) {
    //     emptyFields.push('oe_veryLow_high')
    // }
    // if (!oe_low_low) {
    //     emptyFields.push('oe_low_low')
    // }
    // if (!oe_low_high) {
    //     emptyFields.push('oe_low_high')
    // }
    // if (!oe_medium_low) {
    //     emptyFields.push('oe_medium_low')
    // }
    // if (!oe_medium_high) {
    //     emptyFields.push('oe_medium_high')
    // }
    // if (!oe_high_low) {
    //     emptyFields.push('oe_high_low')
    // }
    // if (!oe_high_high) {
    //     emptyFields.push('oe_high_high')
    // }
    // if (!oe_veryHigh_low) {
    //     emptyFields.push('oe_veryHigh_low')
    // }
    // if (!oe_veryHigh_high) {
    //     emptyFields.push('oe_veryHigh_high')
    // }
    // if (!cs_veryLow_low) {
    //     emptyFields.push('cs_veryLow_low')
    // }
    // if (!cs_veryLow_high) {
    //     emptyFields.push('cs_veryLow_high')
    // }
    // if (!cs_low_low) {
    //     emptyFields.push('cs_low_low')
    // }
    // if (!cs_low_high) {
    //     emptyFields.push('cs_low_high')
    // }
    // if (!cs_medium_low) {
    //     emptyFields.push('cs_medium_low')
    // }
    // if (!cs_medium_high) {
    //     emptyFields.push('cs_medium_high')
    // }
    // if (!cs_high_low) {
    //     emptyFields.push('cs_high_low')
    // }
    // if (!cs_high_high) {
    //     emptyFields.push('cs_high_high')
    // }
    //  if (!cs_veryHigh_low) {
    //      emptyFields.push('cs_veryHigh_low')
    //  }
    // if (!cs_veryHigh_high) {
    //     emptyFields.push('cs_veryHigh_high')
    // }
    // if (emptyFields.length > 0) {
    //     return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    // }
    // add doc to db
    try {
        const user_id = req.user._id
        const configuration = await Configuration.create({
            oe_veryLow_low,
            oe_veryLow_high,
            oe_low_low, 
            oe_low_high,
            oe_medium_low,
            oe_medium_high,
            oe_high_low,
            oe_high_high,
            oe_veryHigh_low,
            oe_veryHigh_high,
            cs_veryLow_low,
            cs_veryLow_high,
            cs_low_low,
            cs_low_high,
            cs_medium_low,
            cs_medium_high,
            cs_high_low,
            cs_high_high,
            cs_veryHigh_low,
            cs_veryHigh_high,        
            user_id
        })
        res.status(200).json(configuration)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//delete a configuration

const deleteConfiguration = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' })
    }

    const configuration = await UserModel.findOneAndDelete({ _id: id })

    if (!configuration) {
        return res.status(400).json({ error: 'No such user' })
    }
    res.status(200).json(configuration)
}

//update a configuration

const updateConfiguration = async (req, res) => {
    const id  = '64690f93381ed65ce38aba7a'
    const {     
        oe_veryLow_low,
        oe_veryLow_high,
        oe_low_low, 
        oe_low_high,
        oe_medium_low,
        oe_medium_high,
        oe_high_low,
        oe_high_high,
        oe_veryHigh_low,
        oe_veryHigh_high,
        cs_veryLow_low,
        cs_veryLow_high,
        cs_low_low,
        cs_low_high,
        cs_medium_low,
        cs_medium_high,
        cs_high_low,
        cs_high_high,
        cs_veryHigh_low,
        cs_veryHigh_high
    
    } = req.body
     let emptyFields = []
    if (!oe_veryLow_low) {
        emptyFields.push('oe_veryLow_low')
    }
    if (!oe_veryLow_high) {
        emptyFields.push('oe_veryLow_high')
    }
    if (!oe_low_low) {
        emptyFields.push('oe_low_low')
    }
    if (!oe_low_high) {
        emptyFields.push('oe_low_high')
    }
    if (!oe_medium_low) {
        emptyFields.push('oe_medium_low')
    }
    if (!oe_medium_high) {
        emptyFields.push('oe_medium_high')
    }
    if (!oe_high_low) {
        emptyFields.push('oe_high_low')
    }
    if (!oe_high_high) {
        emptyFields.push('oe_high_high')
    }
    if (!oe_veryHigh_low) {
        emptyFields.push('oe_veryHigh_low')
    }
    if (!oe_veryHigh_high) {
        emptyFields.push('oe_veryHigh_high')
    }
    if (!cs_veryLow_low) {
        emptyFields.push('cs_veryLow_low')
    }
    if (!cs_veryLow_high) {
        emptyFields.push('cs_veryLow_high')
    }
    if (!cs_low_low) {
        emptyFields.push('cs_low_low')
    }
    if (!cs_low_high) {
        emptyFields.push('cs_low_high')
    }
    if (!cs_medium_low) {
        emptyFields.push('cs_medium_low')
    }
    if (!cs_medium_high) {
        emptyFields.push('cs_medium_high')
    }
    if (!cs_high_low) {
        emptyFields.push('cs_high_low')
    }
    if (!cs_high_high) {
        emptyFields.push('cs_high_high')
    }
     if (!cs_veryHigh_low) {
         emptyFields.push('cs_veryHigh_low')
     }
    if (!cs_veryHigh_high) {
        emptyFields.push('cs_veryHigh_high')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' })
    }
  
    const configuration = await UserModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!configuration) {
        return res.status(400).json({ error: 'No such user' })
    }
    res.status(200).json(configuration)
}

module.exports = {
    createConfiguration,
    getConfigurations,
    getConfiguration,
    deleteConfiguration,
    updateConfiguration
}


