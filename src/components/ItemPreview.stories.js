import ItemPreview from "@/components/ItemPreview.vue";

export default {
    title: 'ItemPreview',
    component: ItemPreview,
};

const Template = (args) => ({
    components: { ItemPreview },
    setup() {
        return {args};
    },
    template: '<item-preview v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    informations: [
        { label: '個数', value: '1' },
        { label: '期限', value: '2024/10/26' },
        { label: 'メモ帳', value: 'ドラッグストア' },
    ],
    datafield_width: '80%',
};