import ButtonWithLogo from '@/components/ButtonWithLogo.vue';

export default {
  title: 'ButtonWithLogo',
  component: ButtonWithLogo,
  argTypes: {
    buttonText: { control: 'text' },
    onClick: { action: 'clicked' },
    width: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { ButtonWithLogo },
  setup() {
    return { args };
  },
  template: '<ButtonWithLogo v-bind="args" @click="args.onClick" />',
});

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Googleで登録',
  width: '20%',
  onClick: () => console.log('clicked'),
};

export const CustomText = Template.bind({});
CustomText.args = {
  buttonText: 'Sign in with Google',
};

export const LongText = Template.bind({});
LongText.args = {
  buttonText: 'Continue with Google Account',
};

export const ShortText = Template.bind({});
ShortText.args = {
  buttonText: 'Google',
};