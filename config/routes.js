module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'post /signup': 'UserController.create'
};
