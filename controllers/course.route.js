const express = require('express');
const router = express.Router();
const Course = require('../models/courses.models');
const mongoose = require('mongoose');

router.get('/', async function (req, res) {
  const classes = await Course.find();
  res.json({ classes });
});
router.get('/:id', async function (req, res) {
  const id = req.params.id;

  const classes = await Course.find({
    _id: mongoose.Types.ObjectId(id),
  });
  res.json({ course: course });
});
router.post('/add', async function (req, res) {
  const { title, details, category} = req.body;
  console.log(req.body);
  // if (!name || !teacher || !description || !membership) {
  //   return res.status(400).json({ message: 'Missing required value' });
  // }
  try {
    const newCourse = new Course({ title, details, category });
    await newCourse.save();
    return res.json({
      message: 'Course created successfully',
    });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;
