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
      { text: 'General', link: '/general/introduction' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        link: 'general/introduction'
      },
      {
        text: 'Details',
        items: [
          { text: 'Site Mechanics', link: '/general/details/mechanics' },
          { text: 'Game Additions', link: '/general/details/adding-games' }
        ]
      },
      {
        text: 'About the Staff',
        link: 'general/staff'
      },
      {
        text: 'How to Interact with CE Assistant',
        link: 'general/ce-assistant'
      },
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
      }
    ]
  },
  lastUpdated: true,
  appearance: 'force-dark',
  base: '/CE_documentation/'
});
