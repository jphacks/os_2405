import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '@/config/firebase'

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
      component: () => import('@/views/MailVerificationCompletedView.vue'),
      meta: { requireAuth: true }
    },
    {
      path: '/mail-send-completed',
      name: 'mail-send-completed',
      component: () => import('@/views/MailSendCompletedView.vue'),
    },
    {
      path: '/profile-register-completed',
      name: 'profile-register-completed',
      component: () => import('@/views/ProfileRegisterCompletedView.vue'),
      meta: { requireAuth: true }
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { requireAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some((record) => record.meta.requireAuth)
  if (requireAuth) {
    // Promiseを使って認証状態の確認を非同期に行う
    new Promise((resolve) => {
      onAuthStateChanged(firebaseAuth, (user) => {
        resolve(user) // ユーザー情報またはnullを解決
      })
    }).then((user) => {
      if (user) {
        if (user.emailVerified) next() // 認証済みの場合は次へ進む
        else next({ name: 'login' })
      } else {
        next({ name: 'login' }) // 未認証の場合はログインページへ
      }
    })
  } else {
    next()
  }
});

export default router
