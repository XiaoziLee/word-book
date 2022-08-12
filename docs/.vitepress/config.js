export default {
    title: '六级英语笔记本',
    description: '六级英语笔记本',
    base: '/word-book/',
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
    themeConfig: {
        logo: '/word-book.svg',
        siteTitle: '六级英语笔记本',
        sidebar: [
            {
                text: '六级单词本',
                collapsible: true,
                collapsed: true,
                link: '/words/',
                items: [
                    { text: '第一天(100词)', link: '/words/words1' }
                ]
            },
        ],
        editLink: {
            pattern: 'https://github.com/XiaoziLee/word-book',
            text: 'Edit this page on GitHub'
        },
        outlineTitle: 'On this page',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/XiaoziLee/word-book' }
        ]
    }
}