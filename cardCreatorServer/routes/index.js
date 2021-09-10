var express = require('express');
var router = express.Router();
const Card = require('../models/subscriber')
const Approved = require('../models/approved')
const Vote = require('../models/vote')
const User = require('../models/user')

/* GET home page. */
let cardsTemp = [
  {
    id: 0,
    name: 'GGG',
    description: 'desc',
    imgURL: 'fil',
    type: 1,
    health: 111,
    attack: 2,
    abilities: [
      {
        name: "Test ability",
        when: 0,
        action: 0,
        actionValue: 5,
        target: 1,
        targetType: 1,
        constraintType: [
          1,
          3
        ],
        constraintDefenceCheck: true,
        constraintDefence: 5,
        constraintAttackCheck: true,
        constraintAttack: 22,
      },
      {
        name: "Ability 2",
        when: 1,
        action: 1,
        actionValue: 20,
        target: 0,
        targetType: 2,
        constraintType: [
          1,
        ],
        constraintDefenceCheck: false,
        constraintDefence: 0,
        constraintAttackCheck: true,
        constraintAttack: 22,
      },
      {
        name: "Ability Test 3",
        when: 1,
        action: 1,
        actionValue: 20,
        target: 0,
        targetType: 2,
        constraintType: [
          1,
        ],
        constraintDefenceCheck: false,
        constraintDefence: 0,
        constraintAttackCheck: true,
        constraintAttack: 22,
      }
    ],
  },
  {
    id: 1,
    name: 'GGG',
    description: 'desc',
    imgURL: 'fil',
    type: 2,
    health: 11,
    attack: 22,
    abilities: [],
  },
  {
    id: 2,
    name: 'name',
    description: 'desc',
    imgURL: 'fil',
    type: 2,
    health: 111,
    attack: 2,
    abilities: [],
  },
  {
    id: 3,
    name: 'name',
    description: 'desc',
    imgURL: 'fil',
    type: 3,
    health: 111,
    attack: 22,
    abilities: [],
  },
  {
    id: 4,
    name: 'GGG',
    description: 'desc',
    imgURL: 'fil',
    type: 1,
    health: 11,
    attack: 22,
    abilities: [],
  },
  {
    id: 5,
    name: 'name',
    description: 'desc',
    imgURL: 'fil',
    type: 1,
    health: 11,
    attack: 22,
    abilities: [],
  },
  {
    id: 6,
    name: 'name',
    description: 'desc',
    imgURL: 'fil',
    type: 1,
    health: 11,
    attack: 22,
    abilities: [],
  },
  {
    id: 7,
    name: 'GGG',
    description: 'desc',
    imgURL: 'fil',
    type: 1,
    health: 11,
    attack: 22,
    abilities: [],
  },
  {
    id: 8,
    name: 'name',
    description: 'desc',
    imgURL: 'fil',
    type: 1,
    health: 11,
    attack: 22,
    abilities: [],
  },
]


router.get('/', async function (req, res, next) {
  try {
    const cards = await Card.find();
  } catch (err) {
    res.status(500).json({ message: err.message })
  }

  res.render('index', { title: 'Express' });
});

router.get('/cards', async function (req, res, next) {
  try {
    const cards = await Card.find();
    res.json(cards)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/approveCard', async function (req, res, next) {
  try {
    const approved = await Approved.insertMany([{ cardid: req.body._id }])
    res.json(approved)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/disapproveCard', async function (req, res, next) {
  try {
    const disapproved = await Approved.deleteOne({ cardid: { $eq: req.body._id } })
    res.json(disapproved)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/approvedIds', async function (req, res, next) {
  try {
    const cardIds = await Approved.find();
    res.json(cardIds)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

router.post('/addCard', async function (req, res, next) {
  try {
    const cards = await Card.insertMany([req.body])
    res.json(cards)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

router.post('/deleteCard', async function (req, res, next) {
  try {
    const deleted = await Card.deleteOne({ _id: { $eq: req.body._id } })
    res.json(deleted)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/voteCard', async function (req, res, next) {
  try {
    const vote = await Vote.insertMany([{ cardid: req.body.cardid, userid: req.body.userid }])
    res.json(vote)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/register', async function (req, res, next) {
  try {
    const correct = await User.insertMany([req.body])
    res.json(correct.length > 0)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


router.post('/login', async function (req, res, next) {
  try {
    const correct = await User.find({ username: { $eq: req.body.username }, password: { $eq: req.body.password } })
    res.json(correct.length > 0)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router;
