import MailVerificationCompletedView from '@/views/MailVerificationCompletedView.vue';

export default {
  title: 'MailVerificationCompletedView',
  component: MailVerificationCompletedView,
};

export const Default = () => ({
  components: { MailVerificationCompletedView },
  template: '<MailVerificationCompletedView />',
});
