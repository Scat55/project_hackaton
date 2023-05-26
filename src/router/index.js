import DialogView from '../views/DialogView.vue';
import RolesView from '../views/RolesView.vue';
import RegistrationView from '../views/RegistrationView.vue';
import SignInView from '../views/SignInView.vue';

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/signin',
    name: 'signin',
    component: SignInView,
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView,
  },
  {
    path: '/:id',
    name: 'openDialog',
    component: DialogView,
  },
  {
    path: '/',
    name: 'roles',
    component: RolesView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
