import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CE Wiki",
  description: "Documentation about Challenge Enthusiasts.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/general/' }
    ],

    sidebar: [
      {
		text: 'The Basics',
		items: [
		  { text: 'Introduction', link: '/general/index' },
		  { text: 'Using the CE website', link: '/general/the-basics' },
		  { text: 'Creating a profile', link: '/general/creating-profile' },
		  { text: 'How do I submit proof?', link: '/general/submitting-proof' },
		  { text: 'Rules and Administration', link: '/general/details/rules-admin' }
		]
      },
      {
        text: 'Core Features',
        items: [
		  { text: 'The DIRE Framework', link: '/general/details/dire' },
		  { text: 'Points & Tiers', link: '/general/details/points-tiers' },
		  { text: 'CE Rating', link: '/general/details/ce-rating' },
          { text: 'Objective Types', link: '/general/details/objectives' },
		  { text: 'Game Categories', link: '/general/details/categories' },
		  { text: 'Game Tags', link: '/general/details/tags' }
        ]
      },
	  {
        text: 'Adding / Valuing Games',
        items: [
		  { text: 'Game Additions', link: '/general/details/adding-games' },
		  { text: 'Valuing Games (an analogy)', link: '/general/details/ce_mountain' },
          { text: 'Other Considerations', link: '/general/details/other-considerations' }
        ]
      },
	  {
        text: 'Features and Functionality',
        items: [
		  { text: 'Casino', link: '/general/details/casino' },
		  { text: 'Bounty Hub', link: '/general/details/bounty' },
		  { text: 'Puzzle Games', link: '/general/details/puzzle-games' },
		  { text: 'Site Achievements', link: '/general/details/site-achievements' },
		  { text: 'Site Titles & Roles', link: '/general/details/titles-roles' }
        ]
      },
      {
        text: 'Other',
        items: [
        { text: 'Staff - Current/Past', link: 'general/staff' },
		{ text: 'CE Bot Utilities', link: 'general/ce-bots' },
		{ text: 'Contacting Mods/Admins', link: 'general/ticketing' },
		{ text: 'Helpful Links', link: 'general/details/links' }
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
