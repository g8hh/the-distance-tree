/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "10% of kilometer": "公里数的 10%",
    "velocites": "速度",
    "Velocity effect is boosted by ^2": "速度效果提升 ^2",
    "Upgraded Velocity": "升级速度",
    "Self-Acceleration": "自加速",
    "Reset for +": "重置获得 +",
    "points": "点数",
    "Currently": "当前",
    "Distance boosts itself gain.": "距离会增加自身增益。",
    "Boosts velocity effect based on distance.": "根据距离提高速度效果。",
    "Boosts previous upgrade based on unspent velocites.": "根据未花费的速度提升之前的升级。",
    "Better Velocity": "更快的速度",
    "Acceleration": "加速度",
    "3^^2 Accelerators": "3^^2 加速器",
    "acceleration go brrr": "加速到 brrr",
    "Acceleration!": "加速!",
    "achievement power": "成就力量",
    "Beyond universe?": "超越宇宙？",
    "Big Rocket = Big Distance": "大火箭=大距离",
    "Get 1 Accelerator. Reward: Gain 50% more velocites.": "获得 1 个加速器。 奖励：获得 50% 以上的速度。",
    "First Meter": "第一米",
    "Get 10 velocites.": "获得 10 速度。",
    "Get 10,000,000 rockets. Reward: Double rocket gain.": "获得 10,000,000 火箭。 奖励：双倍火箭增益。",
    "Get 27 accelerators.": "获得 27 加速器。",
    "Get 5 Accelerators.": "获得 5 个加速器。",
    "Get lights.": "得到光。",
    "Get Rockets. Reward: Double velocity gain.": "得到火箭。 奖励：双倍速度增益。",
    "GO FASTER": "走得更快",
    "Going to Megameter": "前往万里",
    "Googol Meter": "古戈尔米",
    "Got Inflaton?": "有通胀？",
    "Higher Velocity": "更高的速度",
    "Make Rockets": "造火箭",
    "Nice...": "不错...",
    "Reach 1 meter.": "达到 1 米。",
    "Too light...": "太轻了...",
    "Reach at least 1e12 meters. Reward: Accelerator effect is 50% stronger.": "达到至少 1e12 米。 奖励：加速器效果增强 50%。",
    "Reach at least 1e100 meters. Reward: Double light speed gain.": "达到至少 1e100 米。 奖励：双倍光速增益。",
    "Reach at least 100 meters. Reward: Gain 5% more velocites.": "达到至少 100 米。 奖励：速度提高 5%。",
    "accelerators": "加速器",
    "Accelerators boosts velocity gain.": "加速器提高速度增益。",
    "Faster Velocity": "更快的速度",
    "Keep velocity upgrades on reset.": "在重置时保持速度升级。",
    "Unlock Light.": "解锁光。",
    "Unlock Rocket.": "解锁火箭。",
    "You can buy max Accelerators.": "您可以购买最大加速器。",
    "You gain 100% of velocites gain every second.": "你每秒获得 100% 的速度增益。",
    "Accelerator boosts distance gain.": "加速器提高距离增益。",
    "Faster Speed": "更快的速度",
    "Self-Velocity": "自速度",
    "Velocites boosts itself.": "速度提升自身。",
    "Achievement Gotten!": "获得成就！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^\^([\d\.]+)$/,
    /^([\d\.]+)x$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^Reach 1,000 velocites to unlock \(You have (.+) velocites$/, '达到 1,000 个速度即可解锁（您有 $2 速度'],
    [/^Reach at least (.+) meters.$/, '达到至少 $1 米。'],
    [/^which generates (.+) free velocites each second.$/, '每秒产生 $1 自由速度。'],
    [/^Next at (.+) m$/, '下一个在 $1 米'],
    [/^You have (.+) free velocites, which applies velocity effect.$/, '您有 $1 自由速度，可应用速度效果。'],
    [/^You have (.+) m$/, '你有 $1 米'],
    [/^You have (.+) velocites$/, '你有 $1 速度'],
    [/^which multiples distance gain by (.+)x$/, '将距离增益乘以 $1x'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^\+ ([\d\.]+) velocites$/, '\+ $1 速度'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) accelerators$/, '$1 加速器'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.,]+) velocites$/, '$1 速度'],
    [/^\+ ([\d\.,]+) velocites$/, '\+ $1 速度'],
    [/^Req: (.+) \/ (.+) velocites$/, '成本：$1 \/ $2 速度'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (.+) velocites$/, '成本：$1 速度'],
    [/^Cost: (.+) accelerators$/, '成本：$1 加速器'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);