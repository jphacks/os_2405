import LoginView from '@/views/LoginView.vue';

export default {
  title: 'LoginView',
  component: LoginView,
  argTypes: {
    onClick: { action: 'clicked' },
    systemMessageProp: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { LoginView },
  setup() {
    return { args };
  },
  template: '<LoginView v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  systemMessageProp: '',
};
