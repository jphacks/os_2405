import InputPassword from '@/components/InputPassword.vue';

export default {
  title: 'InputPassword',
  component: InputPassword,
};

const Template = (args) => ({
  components: { InputPassword },
  setup() {
    return { args };
  },
  template: '<input-password v-bind="args" />',
});

export const Default = Template.bind({});
