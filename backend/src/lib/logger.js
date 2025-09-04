import { createLogger, format, transports } from "winston";
import path from "path";
import { fileURLToPath } from "url";

// ES module dirname/filename fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: path.join(__dirname, '../../logs/server.log') }),
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    })
  ],
});

export { logger };
