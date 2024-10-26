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

};