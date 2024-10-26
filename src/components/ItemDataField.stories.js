import ItemDataField from "@/components/ItemDataField.vue";

export default {
    title: 'ItemDataField',
    component: ItemDataField,
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' }
    },
};

const Template = (args) => ({
    components: { ItemDataField },
    setup() {
        return { args };
    },
    template: '<v-app><ItemDataField v-bind="args" /></v-app>',
});

export const Default = Template.bind({});
Default.args = {
    label: 'Sample Label',
    value: 'Sample Value'
};