"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidQualityFromString = getValidQualityFromString;
function getValidQualityFromString(quality) {
    switch (quality.toLowerCase().replace('p', '')) {
        case '360':
            return '360';
        case '480':
            return '480';
        case '720':
            return '720';
        case '1080':
            return '1080';
        case '2160':
            return '4k';
        case '4k':
            return '4k';
        default:
            return 'unknown';
    }
}
