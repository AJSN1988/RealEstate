import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import ObjFinder from '../components/ObjFinder';
import ObjectDetails from '../components/ObjectDetails'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/objects',
            name: 'Objects',
            component: ObjFinder,
            props: true
        },
        {
            path: '/details',
            name: 'Details',
            component: ObjectDetails,
            props: true
        }
    ]
});