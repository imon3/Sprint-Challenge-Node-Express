const express = require('express');

const Projects = require('../helpers/projectModel');

const router = express.Router();


// ---------PROJECTS ROUTER
// GET REQUEST
router.get('/projects', async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects)
    } catch {
        res.status(500).json({
            error: 'There was a problem retrieving the data.'
        })
    }
})

router.get('/projects/:id', async (req, res) => {
    try {
        const projectId = await Projects.get(req.params.id);
        res.status(200).json(projectId);
    } catch {
        res.status(500).json({
            error: 'There was a problem retrieving the data.'
        })
    }
})

router.get('/actions/:id/projects', async (req, res) => {
    try {
        const projects = await Projects.getProjectActions(req.params.id);
        if (projects > 0) {
            res.status(200).json(projects)
        } else {
            res.status(404).json({
                message: 'The action could not be found.'
            })
        }
    } catch {
        res.status(500).json({
            error: 'There was a problem retrieving project.'
        })
    }
})

// CREATE REQUEST
router.post('/projects', async (req, res) => {
    try {
        const postProject = await Projects.insert(req.body)
        res.status(201).json(postProject)
    } catch {
        res.status(500).json({
            error: 'Create project failed'
        })
    }
})

// UPDATE REQUEST
router.put('/projects/:id', async (req, res) => {
    try {
        const updateProject = await Projects.update(req.params.id, req.body);
        if (updateProject) {
            res.status(200).json(updateProject)
        } else {
            res.status(404).json({
                message: 'The project could not be found'
            })
        }
    } catch {
        res.status(500).json({
            error: 'There was a problem updating the project.'
        })
    }
})

// DELETE REQUEST
router.delete('./projects/:id', async (req, res) => {
    try {
        const deleteProject = await Projects.remove(req.params.id);
        if (deleteProject > 0) {
            res.status(200).json({
                message: 'The project was deleted.'
            })
        } else {
            res.status(404).json({
                message: 'The project could not be found to be deleted.'
            })
        }
    } catch {
        res.status(500).json({
            error: 'There was a problem deleting the project.'
        })
    }
})

// TIMEOUT ERROR
router.use((req, res) => {
    res.status(404).send('Page could not load');
});

module.exports = router;