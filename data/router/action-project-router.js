const express = require('express');

const Actions = require('../helpers/actionModel');
const Projects = require('../helpers/projectModel');

const router = express.Router();

// -------ACTIONS ROUTER
// GET REQUEST
router.get('/actions', async (req, res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions)
    } catch {
        res.status(500).json({
            error: 'There was a problem retrieving the data.'
        })
    }
})

router.get('/actions/:id', async (req, res) => {
    try {
        const actionsId = await Actions.get(req.params.id);
        res.status(200).json(actionsId);
    } catch {
        res.status(500).json({
            error: 'There was a problem retrieving the data.'
        })
    }
})

// CREATE REQUEST
router.post('/actions', async (req, res) => {
    try {
        const postAction = await Actions.insert(req.body);
        console.log(postAction)
        res.status(201).json(postAction)
    } catch {
        res.status(500).json({
            error: 'Create action failed'
        })
    }
})

// UPDATE REQUEST
router.put('/actions/:id', async (req, res) => {
    try {
        const updateAction = await Actions.update(req.params.id, req.body);
        if (updateAction) {
            res.status(200).json(updateAction)
        } else {
            res.status(404).json({
                message: 'The action could not be found'
            })
        }
    } catch {
        res.status(500).json({
            error: 'There was a problem updating the action.'
        })
    }
})

// DELETE REQUEST
router.delete('/actions/:id', async (req, res) => {
    try {
        const deleteAction = await Actions.remove(req.params.id);
        if (deleteAction) {
            res.status(200).json({
                message: 'The action was deleted.'
            })
        } else {
            res.status(404).json({
                message: 'The action could not be found to be deleted.'
            })
        }
    } catch {
        res.status(500).json({
            error: 'There was a problem deleting the action.'
        })
    }
})

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