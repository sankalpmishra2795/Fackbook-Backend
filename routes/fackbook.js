const express = require('express')

const {getfackbooks,getfackbook,createfackbook,deletefackbook,updatefackbook} = require('../controlar/fackbook')

const router = express.Router()

router.route('/').get(getfackbooks).post(createfackbook)

router.route('/:id').get(getfackbook).put(updatefackbook).delete(deletefackbook)

module.exports = router
