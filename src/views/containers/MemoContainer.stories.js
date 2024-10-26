import MemoContainer from "@/views/containers/MemoContainer.vue";

export default {
  title: 'MemoContainer',
  component: MemoContainer,
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'MemoContainer',
    },
    items: {
      control: { type: 'object' },
      defaultValue: [],
    },
  },
};

export const Default = () => ({
  components: { MemoContainer },
  template: '<v-app><MemoContainer /></v-app>',
  setup() {
    return { args };
  }
});

export const WithItems = () => ({
  components: { MemoContainer },
  template: '<v-app><MemoContainer :items="items" :title="title" /></v-app>',
  setup() {
    const items = [
      {
        id: 1,
        title: '牛乳を買う',
        quantity: 2,
        deadline: '2022-01-01T12:00:00'
      },
      {
        id: 2,
        title: 'パンを買う',
        quantity: 1,
        deadline: '2022-01-02T12:00:00'
      },
      {
        id: 3,
        title: '卵を買う',
        quantity: 6,
        deadline: '2022-01-03T12:00:00'
      }
    ];

    const title = 'マイリスト';
    return { items, title };
  }
});