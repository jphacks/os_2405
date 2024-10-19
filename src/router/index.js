import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/mail-verification-completed',
      name: 'mail-verification-completed',
      component: () => import('@/views/MailVerificationCompletedView.vue')
    },
    {
      path: '/mail-send-completed',
      name: 'mail-send-completed',
      component: () => import('@/views/MailSendCompletedView.vue')
    },
    {
      path: '/profile-register-completed',
      name: 'profile-register-completed',
      component: () => import('@/views/ProfileRegisterCompletedView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/signup');
  } else {
    next();
  }
});

export default router
