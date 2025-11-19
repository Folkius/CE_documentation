import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CE Docs",
  description: "Documentation about Challenge Enthusiasts.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'General', link: '/general/' }
    ],

    sidebar: [
      {
        text: 'Index',
        link: 'general/index'
      },
      { text: 'Site Mechanics Overview', link: '/general/mechanics' },
      {
        text: 'Details',
        items: [
          { text: 'Points', link: '/general/details/points' },
		      { text: 'Valuing games; an analogy', link: '/general/details/ce_mountain' },
          { text: 'Categories', link: '/general/details/categories' },
          { text: 'Objectives', link: '/general/details/objectives' },
          { text: 'Game Additions', link: '/general/details/adding-games' },
          { text: 'Edge-Cases and Exceptions', link: '/general/details/edgecases-and-exceptions' },
		  { text: '[TBD] Site Titles', link: '/general/details/site-titles' }
        ]
      },
      {
        text: 'Others',
        items: [
        { text: 'About the Staff', link: 'general/staff' },
      { text: 'CE Bot Utilities', link: 'general/ce-bots' },
        ]
      }
      //{
      //  text: 'Examples',
      //  items: [
      //    { text: 'Markdown Examples', link: '/markdown-examples' },
      //    { text: 'Runtime API Examples', link: '/api-examples' }
      //  ]
      //}
    ],

    socialLinks: [
      {
        icon: "discord",
        link: "https://discord.gg/challengeenthusiast"
      },
      {
        icon: "github",
        link: "https://github.com/Folkius/CE_documentation"
      },
      {
        icon: "steam",
        link: "https://store.steampowered.com/curator/36185934/"
      }
    ]
  },
  lastUpdated: true,
  appearance: 'force-dark',
  base: '/CE_documentation/',
  head: [['link', { rel: 'icon', href: '/CE_documentation/favicon.ico' }]]
});
