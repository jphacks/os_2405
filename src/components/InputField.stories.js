import InputField from "@/components/InputField.vue";

export default {
  title: 'InputField',
  component: InputField,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'text' },
    value: { control: 'text' },
    placeholder: { control: 'text' },
    rules: { control: 'array' },
    errorMessage: { control: 'text' },
    width: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { InputField },
  setup() {
    return { args };
  },
  template: '<input-field v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    type: 'text',
    value: '',
    placeholder: 'Enter text',
    rules: [],
    errorMessage: '',
    width: '100%',
};