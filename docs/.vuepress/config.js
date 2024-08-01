module.exports = {
  title: 'Mi Components',
  // 站点配置在子目录mi-components下面。注意这里的/必须有，否则静态资源路径不对
  base: '/mi-components/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/componentsDocs/card' },
      { text: 'Github', link: 'https://mynightwish.github.io/mi-components/'},
      { text: 'NPM', link: 'https://www.npmjs.com/package/@mynightwish/mi-components'}
    ],
    sidebar: [
      '/',
      '/componentsDocs/card'
    ]
  }
}