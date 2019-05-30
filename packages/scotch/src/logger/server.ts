

import { LoggingWinston } from "@google-cloud/logging-winston";
import {
    createLogger, transports, format
} from "winston";


const service = process.env.GAE_SERVICE;
const version = process.env.GAE_VERSION;
const local = process.env.local === "true" || false;

const loggingWinston = service && version ? new LoggingWinston({
    serviceContext: {
        service,
        version
    }
}) : null;

const localLoggerConfig = {
    format: format.simple(),
    level: "info",
    transports: [
        new transports.Console()
    ].concat(loggingWinston ? [loggingWinston] : [])
};

const loggerConfig = {
    level: "info",
    transports: [
        new transports.Console()
    ].concat(loggingWinston ? [loggingWinston] : [])
};

const logger = createLogger(local ? localLoggerConfig : loggerConfig);

export default logger;
