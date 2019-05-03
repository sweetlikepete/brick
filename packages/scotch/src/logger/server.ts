

import { LoggingWinston } from "@google-cloud/logging-winston";
import winston from "winston";


const service = process.env.GAE_SERVICE;
const version = process.env.GAE_VERSION;

const loggingWinston = service && version ? new LoggingWinston({
    serviceContext: {
        service,
        version
    }
}) : null;

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console()
    ].concat(loggingWinston ? [loggingWinston] : [])
});

export default logger;
