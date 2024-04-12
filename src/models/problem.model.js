const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty']
    },

    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    },

    difficulty: {
        type: String,
        enum: ["EASY", "MEDIUM", "HARD"],
        required: [true, 'Difficulty cannot be empty'],
        default: 'EASY',
    },

    testCases: [{
        input: {
            type: String,
            required: true,
        },

        output: {
            type: String,
            required: true,
        }
    }],

    editorial: {
        type: String,
    }
}, {timestamps: true});

const Problem = mongoose.model("Problem", problemSchema);

module.exports = Problem;