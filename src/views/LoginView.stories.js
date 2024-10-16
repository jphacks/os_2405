import LoginView from '@/views/LoginView.vue';

export default {
  title: 'LoginView',
  component: LoginView,
};

export const Default = () => ({
  components: { LoginView },
  template: '<LoginView />',
});
