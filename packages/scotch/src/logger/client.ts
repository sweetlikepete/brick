

// This is ok since it's designed as an empty function
// eslint-disable-next-line no-empty-function
const noop = (): void => {};


export default {
    debug: console && console.debug ? console.debug : noop,
    error: console && console.error ? console.error : noop,
    info: console && console.info ? console.info : noop,
    log: console && console.log ? console.log : noop,
    silly: console && console.log ? console.log : noop,
    verbose: console && console.log ? console.log : noop,
    warn: console && console.warn ? console.warn : noop
};
