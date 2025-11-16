const fs = require("fs");
const path = require("path");

const dirsToClean = [".next", "out"];

dirsToClean.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    try {
      fs.rmSync(dirPath, {
        recursive: true,
        force: true,
        maxRetries: 3,
        retryDelay: 100,
      });
      console.log(`✓ Cleaned ${dir}`);
    } catch (error) {
      // Ignore permission errors for locked files (like .next/trace on Windows)
      if (error.code === "EPERM" || error.code === "EBUSY") {
        console.log(`⚠ Skipped ${dir} (some files are locked - this is OK)`);
      } else {
        console.error(`✗ Error cleaning ${dir}:`, error.message);
      }
    }
  }
});
