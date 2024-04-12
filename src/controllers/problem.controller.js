const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const BadRequest = require('../errors/badrequest.error');
const { ProblemService } = require('../services')
const { ProblemRepository } = require('../repositories');


const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({ message: 'Problem controller is up'})
}

async function addProblem(req, res, next) {
    try {
        console.log("Incoming req.body", req.body);
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "New Problem Added",
            error: {},
            data: newProblem
        })
    } catch (error) {
        next(error);
    }
};

async function getProblem(req, res) {
    try {
        
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res) {
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully fetched all the problems",
            error: {},
            data: response
        })
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res) {
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res) {
    try {
        // nothing implemented
        throw new NotImplemented('Add Problem');
    } catch (error) {
        next(error);
    }
}



module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}