import Vue from 'vue';
import Router from 'vue-router';
import Sytelco from '@/components/Sytelco';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Sytelco',
            component: Sytelco,
        },
    ],
});
