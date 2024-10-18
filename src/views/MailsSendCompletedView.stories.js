import MailSendCompletedView from '@/views/MailSendCompletedView.vue';

export default {
  title: 'MailSendCompletedView',
  component: MailSendCompletedView,
};

export const Default = () => ({
  components: { MailSendCompletedView },
  template: '<MailSendCompletedView />',
});
