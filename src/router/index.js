import Vue from 'vue'
import Router from 'vue-router'
// common
import ImgPreview from '@/common/ImgPreview'
// components
import NavMain from '@/components/NavMain'
import Rating from '@/components/Rating'
import Scroller from '@/components/Scroller'
// views
import IndexView from '@/views/IndexView'
import MovieView from '@/views/MovieView'
import BookView from '@/views/BookView'
import CityView from '@/views/CityView'

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
  }, {
    path: '/bookView',
    name: 'BookView',
    component: BookView
  }, {
    path: '/cityView',
    name: 'CityView',
    component: CityView
  }]
})
