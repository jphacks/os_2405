import FloatingActionButtons from "@/components/FloatingActionButtons.vue";

export default {
  title: 'FloatingActionButtons',
  component: FloatingActionButtons,
  argTypes: {
    onClickPlusButton: { action: 'clicked' },
    onClickMenuButton: { action: 'clicked' },
  }
};

const Template = (args) => ({
  components: { FloatingActionButtons },
  setup(){
    return { args };
  },
  template: '<FloatingActionButtons v-bind="args" @click="args.onClick"/>',
});

export const Default = Template.bind({});

Default.args = {
    onClickPlusButton: () => { console.log('clicked plus'); },
    onClickMenuButton: () => { console.log('clicked menu'); },
};
