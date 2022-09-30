<!--
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-08-26 10:20:27
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-09-30 16:29:23
 * @FilePath: /bookcase-web/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# bookcase-web
书籍管理系统的前端   

react+ts+umi   

nvm use 16.16.0   

node v16.16.0 (npm v8.11.0)   


#### 开发中
1、登录`/login`   

2、首页（资讯页）`/home`   

3、书籍管理页`/bookcase`   


#### Issues
1、layouts部分在使用history跳转页面时不会刷新，导致在不该存在的页面显示，该存在的页面不显示
例如：登录后·`/home`  页面上方导航栏不出现，刷新出现，退出不消失
目前增加跳转后刷新，粗暴解决，仍需优化，或者更换layouts加载方式
`Link to={{pathname: 'control/new',query: { domainSign: 10, channel: 1 },}}`
`history.push({pathname: '/',query: { redirect: locationpathname },});`

2、只要token存在即可登录，其值没有验证

#### TO DO
1、页面加载时出现加载动画，以减少突兀   
2、request.ts整理一下，统一代码
