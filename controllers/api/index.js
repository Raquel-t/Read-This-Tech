const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');  // New comment route

router.use('/users', userRoutes);
router.use('/posts', postRoutes);  // Renamed to 'posts'
router.use('/comments', commentRoutes);  // New comment route

module.exports = router;