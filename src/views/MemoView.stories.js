import MemoView from '@/views/MemoView.vue';

export default {
  title: 'MemoView',
  component: MemoView,
};

export const Default = () => ({
  components: { MemoView },
  template: '<v-app><MemoView /></v-app>',
});
