const fs = require('fs');

function logChecklist(data) {
  fs.writeFileSync('./checklist-log.json', JSON.stringify(data, null, 2), 'utf8');
  console.log("\n📁 Checklist and ECS note saved to checklist-log.json");
}

module.exports = { logChecklist };
