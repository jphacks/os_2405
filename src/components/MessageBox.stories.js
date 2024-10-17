// src/stories/MessageBox.stories.js
import MessageBox from '@/components/MessageBox.vue';

export default {
  title: 'MessageBox',
  component: MessageBox,
  argTypes: {
    message: { control: 'text' },
    isError: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { MessageBox },
  setup() {
    return { args };
  },
  template: '<message-box v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  message: 'テストメッセージです',
  isError: false,
};

export const Error = Template.bind({});
Error.args = {
  message: 'エラーメッセージです',
  isError: true,
};

export const LongText = Template.bind({});
LongText.args = {
  message: "ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
};
