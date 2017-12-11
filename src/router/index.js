import Vue from 'vue'
import Router from 'vue-router'
// components
import NavMain from '@/components/NavMain'
import Rating from '@/components/Rating'
import MovieScroller from '@/components/MovieScroller'
// views
import IndexView from '@/views/IndexView'
import MovieView from '@/views/MovieView'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'IndexView',
    component: IndexView
  }, {
    path: '/movieView',
    name: 'MovieView',
    component: MovieView
  }]
})
