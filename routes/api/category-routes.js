const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories, be sure to include its associated Products
  try {
    const categoryData = await category.findAll({
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value, be sure to include its associated Products
  try {
    const categoryData = await category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (!categoryData) {
    res.status(404).json({ message: 'No category found with this id!' });
    return;
    }
   res.status(200).json(categoryData);
   } catch (err) {
   res.status(500).json(err);
  }
 });

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategoryData = await category.create(req.body);
    res.status(200).json(newCategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const tags = await tags.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tags[0]) {
      res.status(404).json({ message: 'No tag with this id'});
      return;
    }
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const tags = await tags.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tags) {
      res.status(404).json({ message: 'no tag with this id'});
      return;
    }
    restart.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
