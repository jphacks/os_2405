import Navigationvar from '@/components/Navigationvar.vue';

export default {
  title: 'Navigationvar',
  component: Navigationvar,
};

export const Default = () => ({
  components: { Navigationvar },
  template: '<v-app><Navigationvar /></v-app>',
});
