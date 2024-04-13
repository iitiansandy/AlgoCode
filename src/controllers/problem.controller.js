const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../errors/notImplemented.error');
const BadRequest = require('../errors/badrequest.error');
const { ProblemService } = require('../services')
const { ProblemRepository } = require('../repositories');
const NotFound = require('../errors/notFound.error');


const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({ message: 'Problem controller is up'})
}

async function addProblem(req, res, next) {
    try {
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

async function getProblem(req, res, next) {
    try {
        const problem = await problemService.getProblem(req.params.id);
        
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problem fetched successfully",
            error: {},
            data: problem
        })
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next) {
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

async function deleteProblem(req, res, next) {
    try {
        
        const deletedProblem = await problemService.deleteProblem(req.params.id);
       
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Successfully deleted the problems",
            error: {},
            data: deletedProblem
        })
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
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