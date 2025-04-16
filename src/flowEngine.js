const fs = require('fs');
const { processClaim } = require('./claimProcessor');
const { logChecklist } = require('./logger');

function runBotFlow() {
  const rawClaim = fs.readFileSync('./claimData.json');
  const claim = JSON.parse(rawClaim);

  const result = processClaim(claim);

  console.log("ECS File Note:");
  console.log(result.ecsFileNote);

  console.log("\nChecklist:");
  result.checklist.forEach(item => {
    console.log(`- ${item.item}: ${item.status}`);
  });

  console.log("\nRecommended Tasks:");
  result.recommendedTasks.forEach(task => {
    console.log(`- ${task}`);
  });


  logChecklist(result);
}

module.exports = { runBotFlow };
