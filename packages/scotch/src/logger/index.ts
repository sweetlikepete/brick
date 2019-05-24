

const isServer = !(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);


// Needed so that webpack won't require this on the server
// eslint-disable-next-line no-eval, global-require, @typescript-eslint/no-require-imports
export default isServer ? eval("require")("./server") : require("./client").default;
