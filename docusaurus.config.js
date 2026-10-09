const {appStoreUrl} = require('./site-links');
const config = {
  title: 'Read Thai Daily',
  tagline: 'From your first letter to your first Thai story.',
  favicon: 'img/favicon.png',
  url: 'https://readthaidaily.com',
  baseUrl: '/',
  trailingSlash: true,
  clientModules: ['./src/language-routing.js'],
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  i18n: {
    defaultLocale: 'en', locales: ['en', 'de', 'fr', 'es'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      de: {label: 'Deutsch', htmlLang: 'de'},
      fr: {label: 'Français', htmlLang: 'fr'},
      es: {label: 'Español', htmlLang: 'es'},
    },
  },
  presets: [['classic', {
    docs: { sidebarPath: './sidebars.js', routeBasePath: 'guide' },
    blog: false,
    theme: { customCss: './src/css/custom.css' },
  }]],
  themeConfig: {
    image: 'img/social-cover.jpg',
    metadata: [
      {name:'theme-color',content:'#faf6ed'},
    ],
    colorMode: {defaultMode:'light',disableSwitch:false,respectPrefersColorScheme:true},
    navbar: {
      title: 'Read Thai Daily',
      logo: {alt:'Read Thai Daily northern Thai house icon',src:'img/app-icon.png',width:36,height:36},
      hideOnScroll:false,
      items:[
        {to:'/#how-it-works',label:'How it works',position:'right'},
        {to:'/#chapters',label:'The journey',position:'right'},
        {to:'/guide/getting-started',label:'Learning guide',position:'right'},
        {type:'localeDropdown',position:'right'},
        {href:appStoreUrl,label:'Get the app ↗',position:'right',className:'nav-download'},
      ],
    },
    footer: {
      style:'light',
      links:[
        {title:'Read Thai Daily',items:[{label:'How it works',to:'/#how-it-works'},{label:'Chapters & pricing',to:'/#chapters'},{label:'About the project',to:'/guide/about'}]},
        {title:'Start reading',items:[{label:'Getting started',to:'/guide/getting-started'},{label:'The Thai script',to:'/guide/thai-script'},{label:'Lesson walkthrough',to:'/guide/lessons'}]},
        {title:'The app',items:[{label:'Download',to:'/guide/download'},{label:'Common questions',to:'/guide/faq'},{label:'Privacy',to:'/guide/privacy'}]},
      ],
      copyright:`© ${new Date().getFullYear()} Read Thai Daily. Made in Phrae. From Phrae into the world.`,
    },
    docs: {sidebar:{hideable:true}},
  },
};
module.exports = config;
