

import config from ".";


export default {
    // Much simpler to just use magic numbers here
    /* eslint-disable no-magic-numbers */
    datastore: config.port + 1,
    memcache: config.port + 2,
    server: config.port,
    webpackBundleAnalyzer: config.port + 3
    /* eslint-enable no-magic-numbers */
};
