import fs from 'fs';
import { resolve } from 'path';

const basePath = resolve();

const filename = {
    scores: resolve(basePath, 'src/db/scores.json')
}

export const readDB = (target) => {
    try {
        return JSON.parse(fs.readFileSync(filename[target], 'utf-8'))
    } catch (err) {
        console.log('readDb err', err)
    }
}

export const writeDB = (target, data) => {
    try {
        // console.log('target ', target)
        // console.log('filename[target] ', filename[target])
        // console.log('data ', data)

        return fs.writeFileSync(filename[target], JSON.stringify(data));
    } catch (err) {
        console.log('writeDB err', err)
    }
}