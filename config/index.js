export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx898bd97fd7914a88",
    // 公众号APP_SECRET
    APP_SECRET: "eb326e84d4163e286a7d04cd6dbd8d4b",
    // 模板消息id
    TEMPLATE_ID: "Pmm57uvjCdYseO2t1Msz0qRBd6cGfVqnyv5_oYGp_jk",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["obikI6Al20y8lj3BB8bsoijVvOmw"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "辽宁",
    // 所在城市
    CITY: "彰武县",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "老婆", "year": "1993", "date": "12-27"},
      {"name": "老公", "year": "2002", "date": "09-24"},
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2015-05-01",
    // 遇见的日子
    MEET_DATE: "2022-08-11",
    // 结婚纪念日
    MARRY_DATE: "2022-09-03",
    


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 "其他"
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们遇见的第{{meet_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
