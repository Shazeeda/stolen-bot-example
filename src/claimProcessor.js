function processClaim(claim) {
  const checklist = [];
  const tasks = [];
  const ecsNotes = [];

  if (!claim.policeReport) {
    checklist.push({ item: "Police report received", status: "Pending" });
    tasks.push("Request police report from customer");
    ecsNotes.push("Police report not yet received.");
  } else {
    checklist.push({ item: "Police report received", status: "Complete" });
  }

  if (!claim.titleProvided) {
    checklist.push({ item: "Title provided", status: "Pending" });
    tasks.push("Request vehicle title or registration");
    ecsNotes.push("Proof of ownership is missing.");
  } else {
    checklist.push({ item: "Title provided", status: "Complete" });
  }

  if (!claim.keyProvided) {
    checklist.push({ item: "Key/fob provided", status: "Pending" });
    tasks.push("Confirm key/fob status with customer");
    ecsNotes.push("Keys/fob not yet collected.");
  } else {
    checklist.push({ item: "Key/fob provided", status: "Complete" });
  }

  if (!claim.affidavitReceived) {
    checklist.push({ item: "Theft affidavit received", status: "Pending" });
    tasks.push("Request signed theft affidavit");
    ecsNotes.push("Affidavit still outstanding.");
  } else {
    checklist.push({ item: "Theft affidavit received", status: "Complete" });
  }

  if (!claim.customerInterview) {
    checklist.push({ item: "Customer interview complete", status: "Pending" });
    tasks.push("Schedule customer interview");
    ecsNotes.push("Interview not completed.");
  } else {
    checklist.push({ item: "Customer interview complete", status: "Complete" });
  }

  if (claim.priorClaims) {
    tasks.push("Review prior claims for potential pattern");
    ecsNotes.push("Prior claims found on file.");
  }

  if (claim.vehicleLocationLastSeen.toLowerCase().includes("home")) {
    tasks.push("Confirm garage entry security and forced entry evidence");
  }

  if (!claim.vehicleRecovered && claim.daysSinceTheft >= 5) {
    tasks.push("Add vehicle to NICB unrecovered list");
    ecsNotes.push("Vehicle not recovered after 5 days.");
  }

  const ecsFileNote = `Checklist generated for claim ${claim.claimId}: ${ecsNotes.join(" ")}`;

  return {
    claimId: claim.claimId,
    status: "Under Investigation",
    checklist,
    recommendedTasks: tasks,
    ecsFileNote
  };
}

module.exports = { processClaim };
