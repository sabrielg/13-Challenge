const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
      }
    ]
  })
  .then(data => {
    res.json(data);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
      }
    ]
  })
  .then(data => {
    res.json(data);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
  })
  .then(data => {
    res.json(data);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id:req.params.id
    }
  })
  .then(data => {
    res.json(data);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.json(data);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
  // delete on tag by its `id` value
});

module.exports = router;
