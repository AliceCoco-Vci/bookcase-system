# bookcase-web
书籍管理系统的前端

react+ts+umi 

nvm use 16.16.0
node v16.16.0 (npm v8.11.0)

#### 开发中
1、登录`/login`
2、首页（咨询页）`/home`
3、书籍管理页`/bookcase`

#### Issues
1、layouts部分在使用history跳转页面时不会刷新，导致在不该存在的页面显示，该存在的页面不显示
例如：登录后·`/home`  页面上方导航栏不出现，刷新出现，退出不消失
目前增加跳转后刷新，粗暴解决，仍需优化，或者更换layouts加载方式
`Link to={{pathname: 'control/new',query: { domainSign: 10, channel: 1 },}}`
`history.push({pathname: '/',query: { redirect: locationpathname },});`
#### TO DO
1、页面加载时出现加载动画，以减少突兀