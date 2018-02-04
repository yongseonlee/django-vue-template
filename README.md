# django-vue-template

> A boilerplate using django, vue

## Run hot-reloading webpack-dev-server


``` bash
# install js dependencies
yarn

# serve with hot reload at localhost:8080
yarn client
```

## Run Django Dev Server

``` bash
# install python dependencies
pip install -r requirements.txt

# django db migration
yarn manage migrate

# django create super user
yarn manage createsuperuser

# run django dev server at localhost:8000
yarn server
```


## Build Frontend Application for Production
``` bash
yarn build
```

## Library

- django
- django-restframework
- django-webpack-loader
- vue
- vue-router
- vuex
- vuex-router-sync
- vue-bootstrap
- webpack-dev-server

## Reference
- [Django + webpack + Vue.js - setting up a new project that's easy to develop and deploy (part 1)](https://ariera.github.io/2017/09/26/django-webpack-vue-js-setting-up-a-new-project-that-s-easy-to-develop-and-deploy-part-1.html)
- [Using Webpack transparently with Django + hot reloading React components as a bonus](http://owaislone.org/blog/webpack-plus-reactjs-and-django/)
