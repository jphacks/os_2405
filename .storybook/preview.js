/** @type { import('@storybook/vue3').Preview } */
import { setup } from '@storybook/vue3';
import vuetify from '@/plugins/vuetify';

setup((app) => {
  app.use(vuetify)
});

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
