import Vue from 'vue'
import Router from 'vue-router'
import indexs from '@/components/indexs'
import Home from '@/components/home'
import Aboutus from '@/components/abouts/aboutus'
import Culture from '@/components/abouts/culture'
import Read from '@/components/read'
import ChildBook from '@/components/childBook'
import Extracurricular from '@/components/extracurricular'
import Join from '@/components/join/join'
import Free from '@/components/join/free'
import Joinask from '@/components/join/joinask'
import Support from '@/components/join/support'
import Contact from '@/components/join/contact'
import Write from '@/components/write/write01'
import Writelist from '@/components/write/writelist'
import Writedetails from '@/components/write/writedetails'
import Newdetails from '@/components/news/newdetails'
import Newlist from '@/components/news/newlist'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'indexs',
    component: indexs,
    children: [{
      path: "/",
      component: Home
    }, {
      path: "/home",
      component: Home
    }, {
      path: "/aboutus",
      component: Aboutus
    }, , {
      path: "/culture",
      component: Culture
    }, {
      path: "/read",
      component: Read
    }, {
      path: "/childBook",
      component: ChildBook
    }, {
      path: "/extracurricular",
      component: Extracurricular
    }, {
      path: "/join",
      component: Join
    }, {
      path: "/free",
      component: Free
    }, {
      path: "/write01",
      component: Write
    }, {
      path: "/writelist",
      component: Writelist
    }, {
      path: "/writedetails",
      component: Writedetails
    }, {
      path: "/newlist",
      component: Newlist
    }, {
      path: "/newdetails",
      component: Newdetails
    }, {
      path: "/joinask",
      component: Joinask
    }, {
      path: "/support",
      component: Support
    }, {
      path: "/contact",
      component: Contact
    }]
  }]
})
