const express = require('express')
const blogController = require('../Controller/blogController')
const router = express.Router()

router.get('/allBlogs', blogController.displayBlogs)
router.post('/blog', blogController.postBlog)
router.put('/blog/:id/edit', blogController.editBlog)
router.delete('/blog/:id', blogController.deleteBlog )


module.exports = router;
