import MakeNewMemo from "@/components/MakeNewMemo.vue";

export default {
    title: 'MakeNewMemo',
    component: MakeNewMemo,
};

const Template = (args) => ({
    components: { MakeNewMemo },
    setup() {
        return { args };
    },
    template: '<make-new-memo v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    label: 'メモ帳の名前',
    placeholder: '新規メモ帳の名前',
};