'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
Route.on('/')
  .render('pages.home', { navClasses: 'fixed-top' })
  .as('home')
Route.on('/find-job')
  .render('pages.find-job', { navClasses: 'fixed-top' })
  .as('find-job')
Route.on('/find-room')
  .render('pages.find-room', { navClasses: 'fixed-top' })
  .as('find-room')
Route.on('/host-room')
  .render('pages.host-room', { navClasses: 'fixed-top' })
  .as('host-room')
Route.on('/post-job')
  .render('pages.post-job', { navClasses: 'fixed-top' })
  .as('post-job')

Route.on('/about')
  .render('pages.about')
  .as('about')
Route.on('/sign-in')
  .render('pages.sign-in')
  .as('sign-in')
Route.on('/sign-up')
  .render('pages.sign-up')
  .as('sign-up')
Route.on('/sign-up/jobseeker')
  .render('pages.sign-up-jobseeker')
  .as('sign-up-jobseeker')
Route.on('/sign-up/host')
  .render('pages.sign-up-host')
  .as('sign-up-host')
Route.on('/listings/:listingType')
  .render('pages.listings')
  .as('listings')
// Route.get('/', 'pages/homeController.index')
// adonis make:controller Home --type http
