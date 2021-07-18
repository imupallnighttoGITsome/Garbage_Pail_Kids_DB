const express = require('express')
const router = express.Router()

const Cards = require('../models/cardmodel')
const Artists = require('../models/artistmodel')

router.get('/', (req, res, next) => {
    res.render('index')
    .catch(next)
})

router.get('/top15', (req, res, next) => {
    Cards.find({$or: [ { series: '1st Series' }, { series: '2nd Series' }]})
    .then(cards => res.render('cardlayout', { cards }))
    .catch(next)

})

router.get('/foodfight', (req, res, next) => {
    Cards.find({yearReleased: 2021})
    .then(cards => res.render('cardlayout', { cards }))
    .catch(next)
})

router.get('/35thanniversary', (req, res, next) => {
    Cards.find({yearReleased: 2020})
    .then(cards => res.render('cardlayout', { cards }))
    .catch(next)
})

router.get('/gallery', (req, res, next) => {
    Artists.find({ artist: { $exists: true}})
    .then(artists => res.render('fanart', { artists }))
    .catch(next)
})

router.get('/35thanniversary/add', (req, res) => {
    Cards.find({ $and: [{ series: '35th Anniversary' }, { name: { $exists: true}}]})
    .then(cards => res.render('addcardform', { cards }))
})

router.get('/foodfight/add', (req, res) => {
    Cards.find({ $and: [{ series: 'Food Fight' }, { name: { $exists: true}}]})
    .then(cards => res.render('addcardform', { cards }))
})

router.get('/gallery/add', (req, res) => {
    Artists.find({ artist: { $exists: true }})
    .then(artists => res.render('addartform', { artists }))
})
router.post('/35thanniversary/add', (req, res) => {
    Cards.create(req.body)
    .then(card => res.redirect('/gpk/35thanniversary'))
})
router.post('/foodfight/add', (req, res, next) => {
    Cards.create(req.body)
    .then(card => res.redirect('/gpk/foodfight'))
    .catch(next)
})
router.post('/gallery/add', (req, res, next) => {
    Artists.create(req.body)
    .then(card => res.redirect('/gpk/gallery'))
    .catch(next)
})

  router.get('/foodfight/:id/edit', (req, res, next) => {
    const id = req.params.id;
    Cards.findById(id)
    .then(card => {
        res.render('updateform', {card})
    })
      .catch(next);
  });
  router.get('/1stseries/:id/edit', (req, res, next) => {
    const id = req.params.id;
    Cards.findById(id)
    .then(card => {
        res.render('updateform', {card})
    })
      .catch(next);
  });
  router.get('/35thanniversary/:id/edit', (req, res, next) => {
    const id = req.params.id;
    Cards.findById(id)
    .then(card => {
        res.render('updateform', {card})
    })
      .catch(next);
  });
router.put('/foodfight/:id', (req, res, next) => {
    const id = req.params.id;
    Cards.findOneAndUpdate(
      { _id: id }, req.body,
      { new: true }
      )
      .then(cards => { res.redirect('/gpk/foodfight')
    })
      .catch(next)
});
router.put('/35thanniversary/:id', (req, res, next) => {
    const id = req.params.id;
    Cards.findOneAndUpdate(
      { _id: id }, req.body,
      { new: true }
      )
      .then(cards => { res.redirect('/gpk/35thanniversary')
    })
      .catch(next)
});
router.put('/1stseries/:id', (req, res, next) => {
    const id = req.params.id;
    Cards.findOneAndUpdate(
      { _id: id }, req.body,
      { new: true }
      )
      .then(cards => { res.redirect('/gpk/top15')
    })
      .catch(next)
});
router.delete('/foodfight/:id', (req, res, next) => {
    let id = req.params.id
    Cards.findOneAndDelete({_id: id })
    .then(cards => res.redirect('/gpk/foodfight'))
    .catch(next)
})
router.delete('/35thanniversary/:id', (req, res, next) => {
    let id = req.params.id
    Cards.findOneAndDelete({_id: id })
    .then(cards => res.redirect('/gpk/35thanniversary'))
    .catch(next)
})
router.delete('/gallery/:id', (req, res, next) => {
    let id = req.params.id
    Cards.findOneAndDelete({_id: id })
    .then(cards => res.redirect('/gpk/gallery'))
    .catch(next)
})
module.exports = router