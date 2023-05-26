import DialogView from '../views/DialogView.vue';
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/:id',
    name: 'openDialog',
    component: DialogView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {},
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
