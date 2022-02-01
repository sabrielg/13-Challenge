const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
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
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
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
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({
    id: req.body.id,
    product_name: req.body.product_name,
    stock: req.body.stock,
    category_id: req.body.category_id
  })
  .then(data => {
    res.json(data);
  })
  .catch( err => {
    console.log(err);
    res.status(500).json(err);
  });
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
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
});

router.delete('/:id', (req, res) => {
  Category.destroy({
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
  // delete a category by its `id` value
});

module.exports = router;
