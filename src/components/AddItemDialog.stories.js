import AddItemDialog from "@/components/AddItemDialog.vue";

export default {
  title: 'AddItemDialog',
  component: AddItemDialog,
};

export const Default = () => ({
  components: { AddItemDialog },
  template: '<AddItemDialog />',
});
