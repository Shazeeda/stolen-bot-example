SIU Stolen Vehicle Automation Bot — Overview
I built this bot to simulate how automation tools at State Farm work across ECS, Splunk, and Power Automate. 
It’s designed to support the Special Investigation Unit (SIU) by streamlining the handling of stolen vehicle claims.

What the Bot Does
When a stolen vehicle claim is assigned to SIU, the bot:

Processes claim data (from claimData.json)
Generates ECS-style file notes
Flags missing evidence or red flags
Builds a tailored checklist
Outputs task recommendations like a ServiceNow queue
Logs everything in a structured JSON file (checklist-log.json) — similar to Splunk tracking

Why It Matters
Reduces claim handling time
Improves documentation accuracy
Prevents missed investigative steps
Enhances fraud detection
Creates consistent audit trail
All of this translates to fewer unnecessary payouts, more efficient claims, and cost savings for State Farm.


claimData.json
“This is the mock claim input. It represents what data might come into a workflow — things like whether the police report was filed, if the title was submitted, whether keys were provided, etc.”

src/claimProcessor.js
“This is the core logic file. It processes the claim data and determines:
•	What items are missing (like a checklist)
•	What follow-up tasks should be suggested
•	And what note would be entered in ECS to document the claim status”

src/flowEngine.js
“This acts like a Power Automate-style flow engine. It handles the flow of data from the claim input, sends it through the processor, and handles the result.”

src/logger.js
“This simulates a Splunk-style logging system. It writes out the full bot result — claim ID, checklist, tasks, and file note — to a log file called checklist-log.json, which can be used for tracking or auditing purposes.”
                

                    <!-- stimulated equalivent in this bot  -->
Power Automate	-- flowEngine.js controls event-based flow logic
ECS File Notes	-- claimProcessor.js builds formatted claim summaries
Splunk Dashboard -- 	checklist-log.json stores structured, timestamped log data
ServiceNow Tasks --	recommendedTasks[] array simulates task queue generation



example of workflow
step 1: claim assigned to SIU 
step 2: power automate logic triggers 
      inside the flowEngine.js the flow calls processClaim() from claimProcessor.js , builds the checklist and ECS note and passese result to logger.js to store structured logs 

  step 3: ECS note & servicenow style task output 
