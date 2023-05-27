import DialogView from '../views/DialogView.vue';
import RolesView from '../views/RolesView.vue';
import RegistrationView from '../views/RegistrationView.vue';
import SignInView from '../views/SignInView.vue';
import SettinsUser from '../views/SettingsUser.vue'
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'roles',
    component: RolesView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: SignInView,
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView,
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettinsUser,
  },
  {
    path: '/dialog/:id',
    name: 'openDialog',
    component: DialogView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
