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
            'ch00_introduction.md',
            'ch01_writing.md',
            'ch02_hiragana.md',
            'ch03_katakana.md',
            'ch04_kanji.md',
            'ch05_basic.md',
            'ch06_stateofbeing.md',
            'ch07_particlesintro.md',
            'ch08_adjectives.md',
            'ch09_verbs.md',
            'ch10_negativeverbs.md',
            'ch11_past_tense.md',
            'ch12_verbparticles.md',
            'ch13_in-transitive.md',
            'ch14_clause.md',
            'ch15_nounparticles.md',
            'ch16_adverbs.md',
            'ch17_essential.md',
            'ch18_polite.md',
            'ch19_people.md',
            'ch20_question.md',
            'ch21_compound.md',
            'ch22_teform.md',
            'ch23_potential.md',
            'ch24_surunaru.md',
            'ch25_conditionals.md',
            'ch26_must.md',
            'ch27_desire.md',
            'ch28_actionclause.md',
            'ch29_define.md',
            'ch30_try.md',
            'ch31_favors.md',
            'ch32_requests.md',
            'ch33_numbers.md',
            'ch34_slang.md',
            'ch35_sentence_ending.md',
            'ch36_specialexpressions.md',
            'ch37_causepass.md',
            'ch38_honorific.md',
            'ch39_unintended.md',
            'ch40_genericnouns.md',
            'ch41_certainty.md',
            'ch42_amount.md',
            'ch43_similarity.md',
            'ch44_comparison.md',
            'ch45_easyhard.md',
            'ch46_negativeverbs2.md',
            'ch47_reasoning.md',
            'ch48_timeactions.md',
            'ch49_nochange.md',
            'ch50_advanced.md',
            'ch51_formal.md',
            'ch52_should.md',
            'ch53_even.md',
            'ch54_signs.md',
            'ch55_feasibility.md',
            'ch56_tendency.md',
            'ch57_volitional2.md',
            'ch58_covered.md',
            'ch59_immedate.md',
            'ch60_other.md',
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
