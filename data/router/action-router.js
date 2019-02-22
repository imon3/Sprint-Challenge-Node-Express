const express = require('express');

const Actions = require('../helpers/actionModel');

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

module.exports = router;