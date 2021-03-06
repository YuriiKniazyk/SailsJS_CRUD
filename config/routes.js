/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /users/list': 'UserController.list',
  'GET /users/add': { view: 'pages/add' },
  'POST /user/create': 'UserController.create',
  'GET /user/edit/:id': 'UserController.edit',
  'POST /user/update/:id': 'UserController.update',
  'POST /user/delete/:id': 'UserController.delete',
  'GET /users/find': 'UserController.find',


  'GET /login': { view: 'pages/login' },
  'POST /login': 'AuthController.login',
  'GET /logout': 'AuthController.logout',
  'GET /register': { view: 'pages/register' }

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
};
