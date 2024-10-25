import RegisterUserName from "@/components/RegisterUserName.vue";

export default {
    title: 'RegisterUserName',
    component: RegisterUserName,
};

const Template = (args) => ({
    components: { RegisterUserName },
    setup() {
        return { args };
    },
    template: '<register-user-name v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    label: 'ユーザー名(表示名)',
    placeholder: '太郎',
};