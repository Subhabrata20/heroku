const express=require('express')
const router=express.Router()

const feedbackroute=require('../controllers/feedbackController')

router.post('/feedbackPost',feedbackroute.storefeedback)
router.get('/feedbackRead',feedbackroute.readFeedback)
module.exports = router
