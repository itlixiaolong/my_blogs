module.exports = {
  title: '前端茅庐',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
  },
  // theme:'@vuepress/blog',
  themeConfig: {
    logo: '/logo.webp',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '工作中常用工具',
        ariaLabel: '工作中常用工具',
        items: [
          { text: '命令行工具配置及使用', link: '/utils/cmd_cli/' },
          { text: 'mac常见软件安装及使用', link: '/utils/mac_software/' },
        ]
      },
      {
        text: 'Node',
        ariaLabel: 'Node',
        items: [
          { text: 'node常见用法', link: '/node/use/' },
          { text: 'npm的常见用法', link: '/node/npm_use' },
          { text: '好用的node包', link: '/node/packages/minimist/' },
        ]
      },
      {
        text: 'Vue',
        ariaLabel: 'Vue',
        items: [
          { text: 'Vue常见用法', link: '/Vue/use/' },
          { text: 'Vue常见的UI库', link: '/Vue/ui/' },
        ]
      },
      {
        text: 'CSS',
        ariaLabel: 'CSS',
        items: [
          { text: 'css', link: '/css/' },
          { text: 'less', link: '/css/less/' },
          { text: 'scss', link: '/css/scss/' },
        ]
      },
      {
        text: 'JavaScript',
        ariaLabel: 'JavaScript',
        items: [
          { text: 'ES5', link: '/js/es5/' },
          { text: 'ES6', link: '/js/es6/' },
          { text: 'TypeScript', link: '/js/ts/' },
          {
            text:'一级标题',
            items: [
              {
                text:'2_test1',link:'/js/test1'
              },
              {
                text:'2_test2',link:'/js/test2'
              }
            ] ,
          },

        ]
      },
      {
        text: 'Vscode',
        ariaLabel: 'Vscode',
        items: [
          { text: 'vscode的使用', link: '/vscode/use/' },
          { text: 'vscode的插件开发', link: '/vscode/extentions/' },
        ]
      },
      {
        text: 'Chrome',
        ariaLabel: 'Chrome',
        items: [
          { text: 'chrome的使用', link: '/chrome/use/' },
          { text: 'chrome的插件开发', link: '/chorme/extentions/' },
        ]
      },
      { text: '前端趋势', link: '/future/' },
      { text: '前端面试', link: '/interview/' },
      {
        text: '关于我们',
        ariaLabel: '关于我们',
        items: [
          { text: '关于我们', link: '/about_we/about' },
          { text: '联系我们', link: '/about_we/contact' },
        ]
      },
    ],

    // sidebar: 'auto', //为每一个页面自动生成sidebar
    smoothScroll: true, //启用页面滚动效果。
    // lastUpdated: 'Last Updated', // string | boolean  获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部：
  },
  plugins:[
    ["vuepress-plugin-auto-sidebar", {
      title: {
        // 更多选项: 
        // `default`、`lowercase`、`uppercase`、`capitalize`、`camelcase`、`kebabcase`、`titlecase`
        mode: "titlecase"
      }
    }],
    ['@vuepress/back-to-top']
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public/'
      }
    }
  }
}