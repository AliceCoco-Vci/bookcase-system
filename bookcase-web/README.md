<!--
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-08-26 10:20:27
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-11-03 17:12:39
 * @FilePath: /bookcase-web/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# bookcase-web
书籍管理系统的前端   

react+ts+umi   
nvm use 16.16.0   
node v16.16.0 (npm v8.11.0)   
>不知道为什么删掉node_modules重新使用npm install会报错   
>可以使用cnpm安装   
>npm install -g cnpm --registry=http://r.cnpmjs.org
>cnpm start   

#### 开发中  
1、登录`/login`      
2、首页（资讯页）`/home`   
`/home` - 最新动态板块（展示微博、twwiter等的最新消息，栅格布局，小卡片从左往右，从上往下，左上为最新（挂一个new的标志，管理员管理时可自主添加new的标签）），汇率查询板块（暂不知道咋做）   
`/home/预售信息` - 预售时程表，希望能有交互感，悬停显示基本预售信息，点击书名显示详情，详情页单独设计   
`/home/出版社信息` - 出版社信息板块（modal卡片形式，包括官网、facebook、twiter、ins、微博、购买方式、购买教程等），各出版社进度汇总板块（链接形式+图片形式，可在前端增删改，数据由后端返回）   
3、书籍管理页`/bookcase`   
#### Issues
1、（已解决）layouts部分在使用history跳转页面时不会刷新，导致在不该存在的页面显示，该存在的页面不显示   
例如：登录后·`/home`  页面上方导航栏不出现，刷新出现，退出不消失   
目前增加跳转后刷新，粗暴解决，仍需优化，或者更换layouts加载方式   
解决方法：将layout组件化，并在routes中对应添加   

2、只要token存在即可登录，其值没有验证   
解决方法：只要后续页面加载时调用api，即可进行验证   

3、(已解决)“登录过期，请重新登录”提示框点击立即登录，layout不刷新   
解决方法：同1   

4、（已解决）antd设置global后全局生效，无法单独设置   
解决方法：将global写在antd组件的外层div样式中即可   

5、（已解决）未登录点击Bookcase跳转到login页点击返回，无法返回home，一直是login
解决方法：将跳转方法由history.push改为history.replace即可

6、(已解决)双击/home页面，右上角登录文字会被选中   
解决方法：莫名其妙自己好了，可能去当时添加的某个组件有关（现已删）

#### TO DO
1、页面加载时出现加载动画，以减少突兀   
2、request.ts整理一下，统一代码     
3、顶部导航栏改为未登录时只显示Home，即设立管理员身份，管理后台（目前的方式仅表面不显示）
4、一个时间条组件，记录一本书的生命
