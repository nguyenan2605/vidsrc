"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetToFeatures = exports.targets = exports.flags = void 0;
exports.getTargetFeatures = getTargetFeatures;
exports.flagsAllowedInFeatures = flagsAllowedInFeatures;
exports.flags = {
    // CORS are set to allow any origin
    CORS_ALLOWED: 'cors-allowed',
    // the stream is locked on IP, so only works if
    // request maker is same as player (not compatible with proxies)
    IP_LOCKED: 'ip-locked',
    // The source/embed is blocking cloudflare ip's
    // This flag is not compatible with a proxy hosted on cloudflare
    CF_BLOCKED: 'cf-blocked',
    // Streams and sources with this flag wont be proxied
    // And will be exclusive to the extension
    PROXY_BLOCKED: 'proxy-blocked',
};
exports.targets = {
    // browser with CORS restrictions
    BROWSER: 'browser',
    // browser, but no CORS restrictions through a browser extension
    BROWSER_EXTENSION: 'browser-extension',
    // native app, so no restrictions in what can be played
    NATIVE: 'native',
    // any target, no target restrictions
    ANY: 'any',
};
exports.targetToFeatures = {
    browser: {
        requires: [exports.flags.CORS_ALLOWED],
        disallowed: [],
    },
    'browser-extension': {
        requires: [],
        disallowed: [],
    },
    native: {
        requires: [],
        disallowed: [],
    },
    any: {
        requires: [],
        disallowed: [],
    },
};
function getTargetFeatures(target, consistentIpForRequests, proxyStreams) {
    const features = exports.targetToFeatures[target];
    if (!consistentIpForRequests)
        features.disallowed.push(exports.flags.IP_LOCKED);
    if (proxyStreams)
        features.disallowed.push(exports.flags.PROXY_BLOCKED);
    return features;
}
function flagsAllowedInFeatures(features, inputFlags) {
    const hasAllFlags = features.requires.every((v) => inputFlags.includes(v));
    if (!hasAllFlags)
        return false;
    const hasDisallowedFlag = features.disallowed.some((v) => inputFlags.includes(v));
    if (hasDisallowedFlag)
        return false;
    return true;
}
