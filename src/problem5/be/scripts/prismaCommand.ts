import { exec } from "child_process";
import { getDatabaseUrl } from "../src/config/default";

const args = process.argv.slice(2);

exec(
  `DATABASE_URL="${getDatabaseUrl()}" npx prisma ${args[0] || ""} ${
    args[1] || ""
  }`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
