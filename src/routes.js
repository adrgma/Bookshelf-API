const {
  addBookHandler,
  getEveryBookHandler,
  getBookByIdHandler,
  changeBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getEveryBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: changeBookByIdHandler,
  },
  {
    method: 'Delete',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },

];

module.exports = routes;
