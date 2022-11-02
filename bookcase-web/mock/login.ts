/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-10-10 17:50:01
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-10 17:56:49
 * @FilePath: /bookcase-web/src/mock/login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
    "POST /api/login": {
        "status": "success",
        "msg": "成功!",
        "username": "AliceCoco",
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXNzd29yZCI6IjEyMzQ1NiIsImlzcyI6ImF1dGgwIiwiZXhwIjoxNjY1NTc1NDcwLCJ1c2VybmFtZSI6IkFsaWNlQ29jbyJ9.7fxnLzcaYIkEXeXIcrURgYL1paNhKKaX5ttPyOj2SFw"
    },
    "POST /api/getUserAuth": {
        "status": "success",
        "msg": "成功!",
        "data": [
            {
              "id": 1,
              "href": "/home",
              "icon": "HomeOutlined",
              "name": "总览",
              "description": "总览菜单",
              "orderNum": 1,
              "shown": 1,
              "level": 0,
              "companyId": 2,
              "operator": "13221050705",
              "operatorName": "13221050705",
              "removeTag": "1",
              "insertTime": "2022-07-13 09:59:20",
              "updateTime": "2022-07-20 11:39:18",
              "selected": true,
              "subMenuList": []
            },
            {
              "id": 90,
              "parentId": -1,
              "parentIds": "-1",
              "href": "/trace",
              "icon": "InsertRowBelowOutlined",
              "name": "溯源配置",
              "description": "溯源配置页面",
              "orderNum": 2,
              "shown": 1,
              "level": 0,
              "companyId": 2,
              "operator": "13221050705",
              "operatorName": "13221050705",
              "removeTag": "1",
              "insertTime": "2022-07-13 10:00:03",
              "updateTime": "2022-07-26 17:11:59",
              "selected": true,
              "subMenuList": [
                {
                  "id": 91,
                  "parentId": 90,
                  "parentIds": "-1,90",
                  "href": "/trace/rule",
                  "icon": "InsertRowAboveOutlined",
                  "name": "溯源规则配置",
                  "description": "溯源规则配置",
                  "orderNum": 3,
                  "shown": 1,
                  "level": 1,
                  "companyId": 2,
                  "operator": "13221050705",
                  "operatorName": "13221050705",
                  "removeTag": "1",
                  "insertTime": "2022-07-13 10:00:34",
                  "updateTime": "2022-07-13 10:00:34",
                  "selected": true,
                  "subMenuList": []
                },
                {
                  "id": 92,
                  "parentId": 90,
                  "parentIds": "-1,90",
                  "href": "/trace/template",
                  "icon": "InsertRowBelowOutlined",
                  "name": "展示模版配置",
                  "description": "展示模版配置",
                  "orderNum": 3,
                  "shown": 1,
                  "level": 1,
                  "companyId": 2,
                  "operator": "13221050705",
                  "operatorName": "13221050705",
                  "removeTag": "1",
                  "insertTime": "2022-07-13 10:01:01",
                  "updateTime": "2022-07-13 10:01:01",
                  "selected": true,
                  "subMenuList": []
                }
              ]
            },
            {
              "id": 93,
              "parentId": -1,
              "parentIds": "-1",
              "href": "/product",
              "icon": "AppstoreOutlined",
              "name": "产品管理",
              "description": "产品管理",
              "orderNum": 3,
              "shown": 1,
              "level": 0,
              "companyId": 2,
              "operator": "13221050705",
              "operatorName": "13221050705",
              "removeTag": "1",
              "insertTime": "2022-07-13 10:01:53",
              "updateTime": "2022-07-13 10:01:53",
              "selected": true,
              "subMenuList": [
                {
                  "id": 94,
                  "parentId": 93,
                  "parentIds": "-1,93",
                  "href": "/product/info",
                  "icon": "GoldOutlined",
                  "name": "产品管理",
                  "description": "产品管理",
                  "orderNum": 3,
                  "shown": 1,
                  "level": 1,
                  "companyId": 2,
                  "operator": "13221050705",
                  "operatorName": "13221050705",
                  "removeTag": "1",
                  "insertTime": "2022-07-13 10:06:35",
                  "updateTime": "2022-07-13 10:06:35",
                  "selected": true,
                  "subMenuList": []
                }
              ]
            },
          ],
    },
}
