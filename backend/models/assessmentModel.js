const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    frequency_of_task_execution: {
        type: Number,
        required: true
    },
    probability_that_information_is_used: {
        type: Number, 
        required: true
    }, 
    probability_that_information_quality_problem_appears: {
        type: Number, 
        required: true,
    },
    customer_satisfaction_a: {
        type: Number, 
        required: true,
    },
    operational_efficiency_a: {
        type: Number, 
        required: true,
    },
    probability_that_consequence_appears_b: {
        type: Number, 
        required: true,
    },
    customer_satisfaction_b: {
        type: Number, 
        required: true,
    },
    operational_efficiency_b: {
        type: Number, 
        required: true,
    },
    probability_that_consequence_appears_c: {
        type: Number, 
        required: true,
    },
    customer_satisfaction_c: {
        type: Number, 
        required: true,
    },
    operational_efficiency_c: {
        type: Number, 
        required: true,
    },
    customer_satisfaction_d: {
        type: Number, 
        required: true,
    },
    operational_efficiency_d: {
        type: Number, 
        required: true,
    },
    probability_that_consequence_appears_e: {
        type: Number, 
        required: true,
    },
    customer_satisfaction_e: {
        type: Number, 
        required: true,
    },
    operational_efficiency_e: {
        type: Number, 
        required: true,
    },
    probability_that_consequence_appears_A: {
        type: Number, 
        required: true,
    },
    probability_that_consequence_appears_B: {
        type: Number, 
        required: true,
    },
    yearly_absolute_frequency: {
        type: Number, 
        required: true,
    },
    overall_impact_direct_consequence_money: {
        type: Number,
        required: true
    },
    overall_impact_direct_consequence_units: {
        type: Number,
        required: true
    },
    overall_impact_that_the_solution_cannot_found_money: {
        type: Number, 
        required: true
    }, 
    overall_impact_that_the_solution_cannot_found_units: {
        type: Number, 
        required: true
    }, 
    total_expected_risk_money: {
        type: Number, 
        required: true,
    },
    total_expected_risk_units: {
        type: Number, 
        required: true,
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true });

const AssessmentModel = mongoose.model("Assessment", assessmentSchema);
module.exports = AssessmentModel