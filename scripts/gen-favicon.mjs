import { createWriteStream } from 'fs';
import zlib from 'zlib';

// 32x32 favicon generator for "UK" in green (#22c55e) on dark (#111827)
const W = 32, H = 32;
const BG  = [17, 24, 39];      // #111827
const FG  = [34, 197, 94];     // #22c55e

// 5x7 pixel font bitmaps
const U = [
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [1,0,0,0,1],
  [0,1,1,1,0],
];
const K = [
  [1,0,0,1,0],
  [1,0,1,0,0],
  [1,1,0,0,0],
  [1,0,1,0,0],
  [1,0,0,1,0],
  [1,0,0,0,1],
  [1,0,0,0,1],
];

// Create RGBA pixel grid
const pixels = Array.from({ length: H }, () =>
  Array.from({ length: W }, () => [...BG, 255])
);

// Scale factor (2x) and positions
const scale = 3;
const fontH = 7 * scale;  // 21
const fontW = 5 * scale;  // 15
const gap   = 2;
const totalW = fontW * 2 + gap; // 32
const startX = Math.floor((W - totalW) / 2); // 0
const startY = Math.floor((H - fontH) / 2);  // ~5

function drawLetter(bitmap, ox, oy) {
  for (let row = 0; row < bitmap.length; row++) {
    for (let col = 0; col < bitmap[row].length; col++) {
      if (bitmap[row][col]) {
        for (let sy = 0; sy < scale; sy++) {
          for (let sx = 0; sx < scale; sx++) {
            const y = oy + row * scale + sy;
            const x = ox + col * scale + sx;
            if (y < H && x < W) pixels[y][x] = [...FG, 255];
          }
        }
      }
    }
  }
}

drawLetter(U, startX, startY);
drawLetter(K, startX + fontW + gap, startY);

// --- PNG encoder ---
function crc32(buf) {
  let crc = 0xFFFFFFFF;
  const table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    table[i] = c;
  }
  for (let b of buf) crc = table[(crc ^ b) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function chunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBytes, data]);
  const crc  = Buffer.alloc(4); crc.writeUInt32BE(crc32(body));
  const len  = Buffer.alloc(4); len.writeUInt32BE(data.length);
  return Buffer.concat([len, typeBytes, data, crc]);
}

// IHDR
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8;  // bit depth
ihdr[9] = 2;  // RGB (no alpha) ... actually let's use 6 = RGBA
ihdr[9] = 6;  // RGBA
ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

// Raw scanlines: filter byte (0) + RGBA per pixel
const raw = Buffer.alloc(H * (1 + W * 4));
for (let y = 0; y < H; y++) {
  raw[y * (1 + W * 4)] = 0; // filter none
  for (let x = 0; x < W; x++) {
    const [r, g, b, a] = pixels[y][x];
    const off = y * (1 + W * 4) + 1 + x * 4;
    raw[off] = r; raw[off+1] = g; raw[off+2] = b; raw[off+3] = a;
  }
}

const compressed = zlib.deflateSync(raw, { level: 9 });

const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), // PNG signature
  chunk('IHDR', ihdr),
  chunk('IDAT', compressed),
  chunk('IEND', Buffer.alloc(0)),
]);

// --- ICO wrapper (single 32x32 PNG image) ---
// ICO header: 6 bytes
// Directory entry: 16 bytes
// PNG data
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);  // reserved
icoHeader.writeUInt16LE(1, 2);  // type: 1 = ICO
icoHeader.writeUInt16LE(1, 4);  // count: 1 image

const dirEntry = Buffer.alloc(16);
dirEntry[0] = 32;   // width (0 = 256)
dirEntry[1] = 32;   // height
dirEntry[2] = 0;    // color count
dirEntry[3] = 0;    // reserved
dirEntry.writeUInt16LE(1, 4);   // color planes
dirEntry.writeUInt16LE(32, 6);  // bits per pixel
dirEntry.writeUInt32LE(png.length, 8);   // image data size
dirEntry.writeUInt32LE(6 + 16, 12);      // offset to image data

const ico = Buffer.concat([icoHeader, dirEntry, png]);

// Write to public/favicon.ico
const out = createWriteStream('public/favicon.ico');
out.write(ico);
out.end();
console.log(`favicon.ico written (${ico.length} bytes)`);
