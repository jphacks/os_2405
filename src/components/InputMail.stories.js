import InputMail from "@/components/InputMail.vue";

export default {
  title: 'InputMail',
  component: InputMail,
};

const Template = (args) => ({
  components: { InputMail },
  setup() {
    return { args };
  },
  template: '<input-mail v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'メールアドレス',
  placeholder: 'メールアドレスを入力',
};
