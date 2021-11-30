const routes = require('express').Router();

const NumberDecompositionController = require('./app/controllers/NumberDecompositionController');

routes.get(
  '/decomposition/:number',
  NumberDecompositionController.index,
);

routes.get('/', (_, res) => {
  return res.status(200).json({
    message: 'Welcome, check the documentation at /api-docs',
  });
});

module.exports = routes;
