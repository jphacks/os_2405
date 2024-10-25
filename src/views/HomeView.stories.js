// stories/TodoList.stories.js
import HomeView from '@/views/HomeView.vue';

export default {
  title: 'HomeView',
  component: HomeView,
}

const Template = (args) => ({
  components: { HomeView },
  setup() {
    return { args }
  },
  template: '<HomeView v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {
  items: [
    { id: 1, title: 'Task 1', datetime: '2023-05-01', description: 'Description 1', quantity: 1 },
    { id: 2, title: 'Task 2', datetime: '2023-05-02', description: 'Description 2', quantity: 2 },
  ],
}