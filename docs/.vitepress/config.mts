import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Web Fun',
  description: 'some web utils',
  lang: 'en',
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [{ text: 'Client', link: '/client/saveFile' }],
        sidebar: {
          '/client/': [
            {
              text: 'saveFile',
              link: '/client/saveFile',
            },
          ],
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        nav: [{ text: '客户端', link: '/zh/client/saveFile' }],
        sidebar: {
          '/zh/client/': [
            {
              text: 'saveFile',
              link: '/zh/client/saveFile',
            },
          ],
        },
      },
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liting-yes/webfun' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Liting',
    },
    search: {
      provider: 'local',
    },
  },
});
