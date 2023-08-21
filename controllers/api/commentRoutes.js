const router = require('express').Router();
const { Comment } = require('../../models'); // Change from Post to Comment
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log("Creating Comment:", req.body);
  try {
    const newComment = await Comment.create({ // Change newPost to newComment
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment); // Return the newComment data
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
      const commentData = await Comment.destroy({
          where: {
              id: req.params.id,
              user_id: req.session.user_id, // Ensure the user is the author
          },
      });

      if (!commentData) {
          res.status(404).json({ message: 'No comment found with this id or you are not the author!' });
          return;
      }

      res.status(200).json(commentData);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;