# vue-blog

![Generic badge](https://img.shields.io/badge/Author-Ilyes%20Abd--Lillah-black.svg?style=for-the-badge) ![Generic badge](https://img.shields.io/badge/Version-1.0.0-orange.svg?style=for-the-badge) ![Generic badge](https://img.shields.io/badge/Vue-2.6.10-green.svg?style=for-the-badge) [![Generic badge](https://img.shields.io/badge/Vue-2.6.10-green.svg?style=for-the-badge)](https://shields.io/) [![Generic badge](https://img.shields.io/badge/Vuex-3.1.2-olive.svg?style=for-the-badge)](https://shields.io/) [![Generic badge](https://img.shields.io/badge/TypeScript-3.5.3-blue.svg?style=for-the-badge)](https://shields.io/) [![PyPI license](https://img.shields.io/pypi/l/ansicolortags.svg?style=for-the-badge)](https://pypi.python.org/pypi/ansicolortags/) [![Generic badge](https://img.shields.io/badge/Quantity%20of%20coffee%20used-1.7%20liters-brown.svg?style=for-the-badge)](https://shields.io/) 
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

[vue-blog] is a fully asynchronous private article management interface

  - Create, edit, read, or delete your articles with ease
  - Enjoy the multiples eye-candies of the interface
  - Fully written in Vue, Typescript and using Vuex as application data managment

# 0. Get started!
### 0.1 How to run
  - `npm run production` : Build the application in production mode, and run it in local web-server
    - Once the server is ready, you can access to the application in your browser using this address ` http://localhost:4242` 
    - _Nb: The local address is copied in the clipboard once the server is running_
- `npm run build` : Run the application in development mode locally
    - Once the web-server is running you can access to the application following this adress `http://localhost:8080`
- `npm run build` : Generate production build of the application ready to be deployed
- `npm run lint` : Run Eslint and Tslint auto-fix

# 1. Features
- #### Authentication
    - `JWT` authentication token
    - `401` `axios` interceptor
    - `vue-router` guards with automatic redirection to `/login` if the session is not authenticated
    - `JWT` validity check service

- #### Login
    - Accessiblity enabled in `/login` form
    - UI states: loadings, errors, and login success state are displayed for user
    - Login form validity check before sending authentication request
    - Press `Enter` to login directly once you fill the form
    - Automatic redirection to `/blog` (homepage) on authentication 
    - Eye-candies
- #### Application toolbar
    - Click on the application logo to be redirected to homepage (`/blog`)
    - User can disconnect from session using the 'Log out' button, once the session is closed the authentication token is deleted and user is redirected to `/login`
- #### Blog View
    - Articles are displayed in cards
    - Article options are avaliable using the three-dot menu button (features: delete article, edit article)
    - Users can delete and article only after confirmation
    - Users can add articles using the '+' button located on the top right side of the view
    - UI states: loading articles, error to get articles, no articles avaliable and fetch articles state are displayed for user
    - Pagination (previous page, next page, last page, first page)
    - Notifications: displayed when the user successfully edit or create an article
- #### Edit / Create article
    - UI states: loadings, errors, and edit / creation success state are displayed for user
    - Redirect to `/blog` after creating or editing an article successfully
- #### Footer
    - Dynamic copyright date
- #### Layout
    - Using the incredible `<slot>` vue feature to build strong layouts
    - UI based on flexbox layouts
    - Responsive: nearly  ( ͡° ͜ʖ ͡°)
- #### Code
    - Typed code
    - Using ES6+ features
    - Axios / ES6 for consuming REST APIs
- #### Misc
    - All the components are made by myself, no CSS library were used in the project
    - Using `vue-feather-icons` to get awesome icons assets
    - Atomic design conception
    - Made with ❤️
    
# 2. Tech
vue-blog can't exist without these awesome open sources technologies:

* [vue] - The Progressive JavaScript Framework
* [vuex] - Vuex is a state management pattern + library for Vue.js applications
* [node] - Evented I/O for the backend
* [typescript] - Typed JavaScript at Any Scale.
* [npm] - Node package manager
* [vue-feather-icons] - Simply beautiful open source icons as Vue functional components.
* [vue-blog] is open-source you can use it, modify it, and improve it if you want 😊
# 3. Screenshots
- #### Login
![Alt text](https://i.ibb.co/K9Htn3C/Annotation-2020-08-07-062939.png "Login view")

- #### Blog view
![Alt text](https://i.ibb.co/ynPgJgQ/Annotation-2020-08-07-063421.png "Blog view")

- #### Edit / Create article view
![Alt text](https://i.ibb.co/dpvhKSm/Annotation-2020-08-07-063943.png "Edit / Create view")

License
----

MIT


[//]: #

   [node]: <http://nodejs.com>
   [vue]: <http://vuejs.com>
   [typescript]: <https://www.typescriptlang.org/>
   [npm]: <https://www.npmjs.com/>
   [vuex]: <https://vuex.vuejs.org/>
   [vue-feather-icons]: <https://vue-feather-icons.egoist.sh/>
   [vue-blog]: <https://github.com/Ilyomix/vue-blog/>

