const { description } = require('../../package')

module.exports = {
  base: '/jpgramma_zhtw/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '日文文法指南-繁體中文版',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '日文文法指南',
        link: '/guide/',
      },
      {
        text: '原文相關連結',
        link: '/links/'
      },
      {
        text: '本站譯者',
        link: 'https://Ayajiro.github.io'
      }
    ],
    // displayAllHeaders: true,
    // activeHeaderLinks: false,
    sidebar: {
      '/guide/': [
        {
          title: '目錄',
          collapsable: false,
          children: [
            '',
            'ch00_introduction',
            'ch01_writing',
            'ch02_hiragana',
            'ch03_katakana',
            'ch04_kanji.md',
            'ch05_basic.md'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
