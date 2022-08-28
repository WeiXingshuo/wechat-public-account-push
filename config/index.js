export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx898bd97fd7914a88",
    // 公众号appSecret
    appSecret: "eb326e84d4163e286a7d04cd6dbd8d4b",
    // 模板消息id
    templateId: "FgvhW34CO6EUvrJ5wnHpeCOJWgl5okk0BIqJvwB06R4",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["obikI6Al20y8lj3BB8bsoijVvOmw"],

    // 信息配置
    // 所在省份
    province: "广东",
    // 所在城市
    city: "惠州",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1993", "date": "12-27", "type": 'new'},
      {"name": "家公", "year": "1993", "date": "08-09", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2015-05-01",
    // 结婚纪念日
    marryDate: "2020-01-04"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
