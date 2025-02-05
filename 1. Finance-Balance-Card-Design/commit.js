import { execSync } from "child_process";

const commitMsg = process.argv[2] || "Auto commit"; // Get message from CLI args

try {
  
  console.log("📤 Adding files to Git...");
  execSync("git add .", { stdio: "inherit" });

  console.log(`📝 Committing with message: "${commitMsg}"`);
  execSync(`git commit -m "${commitMsg}"`, { stdio: "inherit" });

  console.log("🚀 Pushing to repository...");
  execSync("git push", { shell: true, stdio: "inherit" });

  console.log("✅ Pushed to repository");
} catch (error) {
  console.error("❌ Error:", error.message);
}
