import SignUpView from '@/views/SignUpView.vue';

export default {
  title: 'SignUpView',
  component: SignUpView,
};

export const Default = () => ({
  components: { SignUpView },
  template: '<SignUpView />',
});
