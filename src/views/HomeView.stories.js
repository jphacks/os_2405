import HomeView from '@/views/HomeView.vue';

export default {
  title: 'HomeView',
  component: HomeView,
};

export const Default = () => ({
  components: { HomeView },
  template: '<HomeView />',
});
