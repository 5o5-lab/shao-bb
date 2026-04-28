const fs = require('fs');
const path = require('path');

const targetFiles = ['.cursorrules', '.windsurfrules', '.clinerules'];
const injectContent = `

---
# 🪨 Shao-bb 模式拦截约定 (IDE Global Rule)
# 回应要高信息密度。尽量删除多余客套、情绪铺垫、重复解释，使用电报体短句、符号优先。
# 【绝对红线】：简化的是外围输出但绝对不能减少任何技术语义点、具体代码行数和核心参数！必须100% 确保信息无缺漏。如遇诸如 rm -rf 等风险操作应当暂时停用省流并清晰提示。
---
`;

console.log("🚀 开始将 Shao-bb 核心规则分发至通用 IDE 环境...");

// 取当前脚本所在的工作区根目录（假设脚本放在 scripts/，则上一级是根）
const rootPath = path.resolve(__dirname, '../../..'); 
// 修正：我们期望脚本是被用户在他们自己的项目中调用的，通常是通过 npx 或者拷贝。
// 为了简化当前原型，我们将针对运行脚本的当前目录 (process.cwd()) 进行操作。
const workDir = process.cwd();

let injectedCount = 0;

targetFiles.forEach(fileName => {
    const filePath = path.join(workDir, fileName);
    
    // 如果文件不存在则跳过，或者可以设计为如果所有都不存在则强制创建 .cursorrules
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        if (!content.includes('Shao-bb')) {
            fs.appendFileSync(filePath, injectContent, 'utf-8');
            console.log(`✅ 已成功向 ${fileName} 注入 Shao-bb 规则。`);
            injectedCount++;
        } else {
            console.log(`⏩ 文件 ${fileName} 中已存在 Shao-bb 规则，跳过。`);
        }
    }
});

// Default to create .cursorrules if nothing exists
if (injectedCount === 0) {
    const defaultPath = path.join(workDir, '.cursorrules');
    if (!fs.existsSync(defaultPath)) {
        fs.writeFileSync(defaultPath, injectContent.trim() + "\n", 'utf-8');
        console.log(`✅ 未检测到主流规则文件，已自动创建默认的 .cursorrules 并完成注入。`);
    } else {
        console.log(`⏩ 默认 .cursorrules 已存在规则，无需重复写入。`);
    }
}

console.log("🎉 通用 IDE 环境配置已完成。Shao-bb 将全面渗透您的当前项目！");
