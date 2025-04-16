I built this bot to simulate how State Farm bots operate across ECS, Splunk, and Power Automate. It handles a stolen vehicle claim under SIU review, generates file notes, flags missing evidence, and outputs a structured log and task list—just like ServiceNow would. This improves claim accuracy, reduces human error, and ensures investigators don’t miss key tasks in high-risk cases.

This automation bot helps State Farm reduce claim handling time, improves documentation accuracy, and ensures no key investigative steps are missed. That means fewer unnecessary payouts, better fraud detection, and more consistent audit trails — all of which translate to cost savings and better claim outcomes.


This bot simulates a Power Automate-style intelligent assistant for the Special Investigation Unit (SIU) at an insurance company—designed to streamline the handling of stolen vehicle claims under investigation.

It processes claim data, generates ECS-style notes, maintains checklist audit logs (like Splunk), and simulates a ServiceNow-style task tracking system for adjusters and SIU reps.

What This Bot Does
When a claim is assigned to SIU for a stolen vehicle:

It acts like a Power Automate flow:
Processes structured claim data (from claimData.json)
Evaluates red flags and required documentation
Generates tailored checklists and ECS-style updates

It mimics Splunk logging:
Outputs a detailed, structured JSON log (checklist-log.json)
Can be used for tracking bot runs or audit reporting

It simulates ServiceNow task creation:
Suggests next-step tasks based on missing evidence or red flags
Could be connected to a real task engine or used to simulate it in interviews

                    
                

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
