const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/v1_routes');

router.use('/v1', v1ApiRoutes);  // iska mtlb kahi bhi /v1 ka kuch bhi dkikhe then usse v1ApiRoutes ke paas bhejdo

module.exports = router;