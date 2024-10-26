import HomeView from '@/views/HomeView.vue';

export default {
  title: 'HomeView',
  component: HomeView,
  argTypes: {
    items: {
      control: {
        type: 'object',
      },
    },
  }
};

export const Default = () => ({
  components: { HomeView },
  template: '<v-app><HomeView /></v-app>',
  setup() {
    return { items: [
        {
            id: 1,
            title: "hogehoge",
            deadline: "2021-12-31",
            quqntity: 1,
        },
        {
            id: 2,
            title: "fugafuga",
            deadline: "2021-12-31",
            quqntity: 2,
        },
    ] };
  }
});
