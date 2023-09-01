const Assessment = require('../models/assessmentModel')
const mongoose = require('mongoose')
const { ObjectId } = require('mongoose').Types;
const UserModel = require('../models/assessmentModel')

//get all assessments
const getAssessments = async (req, res) => {
    const user_id = req.user._id
    const admin_id = new ObjectId('643257a0ceb927d2db05f5ec')

    if (user_id.equals(admin_id)) {
        const assessments = await Assessment.find().sort({ createdAt: -1 })
        res.status(200).json(assessments)
    } else {
        const user_id = req.user._id
        const assessments = await Assessment.find({ user_id }).sort({ createdAt: -1 })
        res.status(200).json(assessments)
    }
}

//get a single assessment
const getAssessment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such assessment' })
    }

    const assessment = await Assessment.findById(id)

    if (!assessment) {
        return res.status(400).json({ error: 'No such assessment' })
    }

    res.status(200).json(assessment)
}

//create new assessment

const createAssessment = async (req, res) => {
    const { title,
        frequency_of_task_execution,
        probability_that_information_is_used,
        probability_that_information_quality_problem_appears,
        customer_satisfaction_a,
        operational_efficiency_a,
        probability_that_consequence_appears_b,
        customer_satisfaction_b,
        operational_efficiency_b,
        probability_that_consequence_appears_c,
        customer_satisfaction_c,
        operational_efficiency_c,
        customer_satisfaction_d,
        operational_efficiency_d,
        probability_that_consequence_appears_e,
        customer_satisfaction_e,
        operational_efficiency_e,
        probability_that_consequence_appears_A,
        probability_that_consequence_appears_B,
        yearly_absolute_frequency,
        overall_impact_direct_consequence_money,
        overall_impact_direct_consequence_units,
        overall_impact_that_the_solution_cannot_found_money,
        overall_impact_that_the_solution_cannot_found_units,
        total_expected_risk_money,
        total_expected_risk_units
    } = req.body

    let emptyFields = []
    if (!title) {
        emptyFields.push('title')
    }
    if (!frequency_of_task_execution) {
        emptyFields.push('frequency_of_task_execution')
    }
    if (!probability_that_information_is_used) {
        emptyFields.push('probability_that_information_is_used')
    }
    if (!probability_that_information_quality_problem_appears) {
        emptyFields.push('probability_that_information_quality_problem_appears')
    }
    if (!customer_satisfaction_a) {
        emptyFields.push('customer_satisfaction_a')
    }
    if (!operational_efficiency_a) {
        emptyFields.push('operational_efficiency_a')
    }
    if (!probability_that_consequence_appears_b) {
        emptyFields.push('probability_that_consequence_appears_b')
    }
    if (!operational_efficiency_b) {
        emptyFields.push('operational_efficiency_b')
    }
    if (!probability_that_consequence_appears_c) {
        emptyFields.push('probability_that_consequence_appears_c')
    }
    if (!customer_satisfaction_c) {
        emptyFields.push('customer_satisfaction_c')
    }
    if (!operational_efficiency_c) {
        emptyFields.push('operational_efficiency_c')
    }
    if (!customer_satisfaction_d) {
        emptyFields.push('customer_satisfaction_d')
    }
    if (!operational_efficiency_d) {
        emptyFields.push('operational_efficiency_d')
    }
    if (!probability_that_consequence_appears_e) {
        emptyFields.push('probability_that_consequence_appears_e')
    }
    if (!customer_satisfaction_e) {
        emptyFields.push('customer_satisfaction_e')
    }
    if (!operational_efficiency_e) {
        emptyFields.push('operational_efficiency_e')
    }
    if (!probability_that_consequence_appears_A) {
        emptyFields.push('probability_that_consequence_appears_A')
    }
    if (!probability_that_consequence_appears_B) {
        emptyFields.push('probability_that_consequence_appears_B')
    }
    if (!yearly_absolute_frequency) {
        emptyFields.push('yearly_absolute_frequency')
    }
    if (!overall_impact_direct_consequence_money) {
        emptyFields.push('overall_impact_direct_consequence_money')
    }
    if (!overall_impact_direct_consequence_units) {
        emptyFields.push('overall_impact_direct_consequence_units')
    }
    if (!overall_impact_that_the_solution_cannot_found_money) {
        emptyFields.push('overall_impact_that_the_solution_cannot_found_money')
    }
    if (!overall_impact_that_the_solution_cannot_found_units) {
        emptyFields.push('overall_impact_that_the_solution_cannot_found_units')
    }
    if (!total_expected_risk_money) {
        emptyFields.push('total_expected_risk_money')
    }
    if (!total_expected_risk_units) {
        emptyFields.push('total_expected_risk_units')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const user_id = req.user._id
        const assessment = await Assessment.create({
            title,
            frequency_of_task_execution,
            probability_that_information_is_used,
            probability_that_information_quality_problem_appears,
            customer_satisfaction_a,
            operational_efficiency_a,
            probability_that_consequence_appears_b,
            customer_satisfaction_b,
            operational_efficiency_b,
            probability_that_consequence_appears_c,
            customer_satisfaction_c,
            operational_efficiency_c,
            customer_satisfaction_d,
            operational_efficiency_d,
            probability_that_consequence_appears_e,
            customer_satisfaction_e,
            operational_efficiency_e,
            probability_that_consequence_appears_A,
            probability_that_consequence_appears_B,
            yearly_absolute_frequency,
            overall_impact_direct_consequence_money,
            overall_impact_direct_consequence_units,
            overall_impact_that_the_solution_cannot_found_money,
            overall_impact_that_the_solution_cannot_found_units,
            total_expected_risk_money,
            total_expected_risk_units,
            user_id
        })
        res.status(200).json(assessment)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}

//delete an assessment

const deleteAssessment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' })
    }

    const assessment = await UserModel.findOneAndDelete({ _id: id })

    if (!assessment) {
        return res.status(400).json({ error: 'No such user' })
    }
    res.status(200).json(assessment)
}

//update an assessment

const updateAssessment = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' })
    }

    const assessment = await UserModel.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!assessment) {
        return res.status(400).json({ error: 'No such user' })
    }
    res.status(200).json(assessment)
}

module.exports = {
    createAssessment,
    getAssessments,
    getAssessment,
    deleteAssessment,
    updateAssessment
}


