const express = require('express');
const validateUserId = require('../middleware/validateUserId');
const validateUser = require('../middleware/validateUser');
const validatePost = require('../middleware/validatePost');

const router = express.Router();

const Users = require('./userDb.js');
//Add a User
//Expects a Body w/ a Name
router.post('/',validateUser, (req, res) => {
    Users.insert(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Error adding the user."
      });
    });
});

//Add a Post to a Users' Account
//Expects a body w/ text + user_id
router.post('/:id/posts',validateUserId,validatePost, (req, res) => {
    Post.insert(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Error adding post"
      });
    });
});

//Get all Users
router.get('/', (req, res) => {
    Users.get(req.query)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Error retrieving users."
      });
    });
});

//Get users by ID
router.get('/:id',validateUserId, (req, res) => {
    Users.getById(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Error retrieving user."
      });
    });
});

//Get a user's posts
router.get('/:id/posts',validateUserId, (req, res) => {
    Users.getUserPosts(req.params.id)
    .then(posts => {
      res.status(201).json(posts);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Error getting user's posts."
      });
    });
});

//Delete a User
router.delete('/:id',validateUserId, (req, res) => {
    Users.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: "The user has been deleted."
        });
      } else {
        res.status(404).json({
          message: "The user could not be found."
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Error deleting the user."
      });
    });
});

//Edit a User
router.put('/:id',validateUserId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    Users.update(id, changes)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          message: "Error updating user"
        });
      });
});

module.exports = router;
