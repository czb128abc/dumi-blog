import { defineConfig } from 'dumi';

export default defineConfig({
  // antd: {},
  // tailwindcss: {
  //   configName: 'tailwind.config.js',
  //   path: '@/assets/tailwind.css', // eg @/assets/tailwind.css
  //   purgecssEnable: process.env.UMI_ENV !== 'local',
  //   purgecssOptions: {
  //     content: [
  //       './src/**/*.html',
  //       './src/**/*.ejs',
  //       './src/**/*.tsx',
  //       './src/**/*.ts',
  //     ],
  //     defaultExtractor: (content: string) =>
  //       content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [],
  //   },
  // },
  title: 'dumi-blog',
  mode: 'site',
  // more config: https://d.umijs.org/config
  locales: [['zh-CN', '中文']],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
    // 'umi-plugin-tailwindcss',
  ],
  styles: ['//at.alicdn.com/t/font_2771589_b8x1d6ow39n.css'],
});
