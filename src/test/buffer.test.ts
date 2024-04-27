import assert from 'assert';

import { bufferToHexString, bufferToString, hexStringToBuffer, stringToBuffer } from '../main/buffers.js';

describe('buffer', () => {

    it('encodes buffer to hex string', () => {
        const str = 'Привет 👋';
        const buf = stringToBuffer(str);
        const hex = bufferToHexString(buf);
        assert.strictEqual(hex, 'd09fd180d0b8d0b2d0b5d18220f09f918b');
    });

    it('decodes hex string into buffer', () => {
        const hex = 'd09fd180d0b8d0b2d0b5d18220f09f918b';
        const buf = hexStringToBuffer(hex);
        const str = bufferToString(buf);
        assert.strictEqual(str, 'Привет 👋');
    });

});
