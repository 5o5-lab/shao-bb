const fs = require('fs');
const path = require('path');

const modeFile = path.join(__dirname, 'shao-bb.mode');

let mode = 'ultra'; // 默认启动项
if (fs.existsSync(modeFile)) {
    mode = fs.readFileSync(modeFile, 'utf-8').trim().toLowerCase();
}

if (mode === 'off' || mode === 'none' || mode === 'stop') {
    // 真正的静默挂载，尊重用户意愿跨越 session 停止省流
    process.exit(0);
}

const prmLite = "SHAO-BB (lite) 已激活。核心规则：剔除客套、铺垫、过度解释，保留完整语法，绝不能减少任何核心技术语义点、代码位置和核心参数。";
const prmUltra = "SHAO-BB (ultra) 已激活。核心规则：完全剔除废话、客气语与过度解释。使用电报体短句、符号优先。严禁输出“好的”等慰问语。简化外围输出但绝对不能减少任何技术语义点、代码和核心参数，100% 确保信息无损。";

const baseMsg = mode === 'lite' ? prmLite : prmUltra;

console.log(`${baseMsg} 退出或切换指令：输入 $shao-bb lite|ultra|off。状态由代理自身维护持久化驻留。`);
