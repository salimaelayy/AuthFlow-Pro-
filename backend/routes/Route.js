const express = require('express');
const router = express.Router();

router.post('/dashboard', console.log("Dashboard"));
router.post('/login', console.log("login")); 
router.post('/logout', console.log("logout"));
router.get('/profile', console.log("profile"));

module.exports = router; 