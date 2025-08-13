import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../design-system-test/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  viteFinal: async (config) => {
    // Configure Vite to handle your design system paths
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@pluminsurance/design-system-test.utilities': new URL('../design-system-test/ui/utilities', import.meta.url).pathname,
      '@pluminsurance/design-system-test.styles': new URL('../design-system-test/styles', import.meta.url).pathname,
                '@pluminsurance/design-system-test.icons': new URL('../design-system-test/ui/icons', import.meta.url).pathname,
      '@pluminsurance/design-system-test.button': new URL('../design-system-test/ui/button', import.meta.url).pathname,
      '@pluminsurance/design-system-test.progress': new URL('../design-system-test/ui/progress', import.meta.url).pathname,
      '@pluminsurance/design-system-test.skeleton': new URL('../design-system-test/ui/skeleton', import.meta.url).pathname,
      '@pluminsurance/design-system-test.cards': new URL('../design-system-test/ui/cards', import.meta.url).pathname,
      '@pluminsurance/design-system-test.modal': new URL('../design-system-test/ui/modal', import.meta.url).pathname,
      '@pluminsurance/design-system-test.counter': new URL('../design-system-test/ui/counter', import.meta.url).pathname,
      '@pluminsurance/design-system-test.divider': new URL('../design-system-test/ui/divider', import.meta.url).pathname,
      '@pluminsurance/design-system-test.icon-button': new URL('../design-system-test/ui/iconButton', import.meta.url).pathname,
      '@pluminsurance/design-system-test.link-button': new URL('../design-system-test/ui/linkButton', import.meta.url).pathname,
      '@pluminsurance/design-system-test.badge': new URL('../design-system-test/ui/badge', import.meta.url).pathname,
      '@pluminsurance/design-system-test.leaflet': new URL('../design-system-test/ui/leaflet', import.meta.url).pathname,
      '@pluminsurance/design-system-test.illustrations': new URL('../design-system-test/ui/illustrations', import.meta.url).pathname,
      '@pluminsurance/design-system-test.banner': new URL('../design-system-test/ui/banner', import.meta.url).pathname,
      '@pluminsurance/design-system-test.checkbox': new URL('../design-system-test/ui/checkbox', import.meta.url).pathname,
      '@pluminsurance/design-system-test.chip': new URL('../design-system-test/ui/chip', import.meta.url).pathname,
      '@pluminsurance/design-system-test.dropdown-menu': new URL('../design-system-test/ui/dropdownMenu', import.meta.url).pathname,
      '@pluminsurance/design-system-test.floating-button': new URL('../design-system-test/ui/floatingButton', import.meta.url).pathname,
      '@pluminsurance/design-system-test.input': new URL('../design-system-test/ui/input', import.meta.url).pathname,
      '@pluminsurance/design-system-test.input-search': new URL('../design-system-test/ui/inputSearch', import.meta.url).pathname,
      '@pluminsurance/design-system-test.switch': new URL('../design-system-test/ui/switch', import.meta.url).pathname,
      '@pluminsurance/design-system-test.tabs': new URL('../design-system-test/ui/tabs', import.meta.url).pathname,
      '@pluminsurance/design-system-test.toast': new URL('../design-system-test/ui/toast', import.meta.url).pathname,
      '@pluminsurance/design-system-test.tooltip': new URL('../design-system-test/ui/tooltip', import.meta.url).pathname,
      '@pluminsurance/design-system-test.avatar': new URL('../design-system-test/ui/avatar', import.meta.url).pathname,
    };
    
    return config;
  },
};

export default config;