import VerifyCompletedView from '@/views/VerifyCompletedView.vue';

export default {
  title: 'VerifyCompletedView',
  component: VerifyCompletedView,
  argTypes: {
    message: { control: 'text' },
    buttonText: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { VerifyCompletedView },
  setup() {
    return { args };
  },
  template: '<VerifyCompletedView v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  message: '成功しました！',
  buttonText: '続ける',
};
