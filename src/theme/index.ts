import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  globalCss: {
    body: {
      bg: '#1E90FF',
      fontFamily: 'sans-serif',
    },
  },

  cssVarsRoot: ':where(html)',

  theme: {
    tokens: {
      shadows: {
        'basic-shadow': { value: '0 4px 8px rgba(0, 0, 0, 0.15)' },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
