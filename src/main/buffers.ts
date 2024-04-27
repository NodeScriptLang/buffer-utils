export function stringToBuffer(str: string) {
    return new TextEncoder().encode(str).buffer;
}

export function bufferToString(buf: ArrayBufferLike, encoding = 'utf-8') {
    return new TextDecoder(encoding).decode(buf);
}

export function binaryStringToBuffer(string: string): ArrayBuffer {
    const buf = new Uint8Array(string.length);
    for (let i = 0; i < string.length; i++) {
        buf[i] = string.charCodeAt(i);
    }
    return buf.buffer;
}

export function bufferToBinaryString(buffer: ArrayBuffer): string {
    const view = new Uint8Array(buffer);
    let result = '';
    for (let i = 0; i < view.byteLength; i++) {
        result += String.fromCharCode(view[i]);
    }
    return result;
}

export function hexStringToBuffer(str: string): ArrayBuffer {
    const length = str.length / 2;
    const buf = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
        const j = i * 2;
        const byte = parseInt(str.substring(j, j + 2), 16);
        buf[i] = byte;
    }
    return buf.buffer;
}

export function bufferToHexString(buffer: ArrayBuffer): string {
    const view = new Uint8Array(buffer);
    let result = '';
    for (let i = 0; i < view.byteLength; i++) {
        result += view[i].toString(16).padStart(2, '0');
    }
    return result;
}
