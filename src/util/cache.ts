import * as fs from "fs";
import { Response } from '../types/oebb/response';

interface CacheEntry {
    timestamp: number;
    value: any;
}

let cache: { [key: number]: CacheEntry } = {};
const CACHE_DURATION_MS = 3600 * 1000;

function cleanupExpiredCache(): void {
    const now = Date.now();
    for (const key in cache) {
        if (now - cache[key].timestamp >= CACHE_DURATION_MS) {
            delete cache[key];
        }
    }
}

function getCachedValue(key: number): any | null {
    if (fs.existsSync("cache.json")) {
        cache = JSON.parse(fs.readFileSync("cache.json", "utf-8"));
        cleanupExpiredCache();
    }
    const entry = cache[key];
    return entry ? entry.value : null;
}

function hashCode(str: string) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
}

function setCachedValue(key: number, value: any): void {
    cleanupExpiredCache();
    cache[key] = { timestamp: Date.now(), value };
    fs.writeFileSync("cache.json", JSON.stringify(cache, null, 4));
}

export function withCache(fn: (...args: any[]) => Promise<Response>, isCacheEnabled: boolean = true) {
    return async function (...args: any[]): Promise<Response> {
        if (!isCacheEnabled) {
            return await fn(...args);
        }

        const cacheKey = hashCode(JSON.stringify(args));
        const cachedValue = getCachedValue(cacheKey);

        if (cachedValue !== null) {
            return cachedValue;
        }

        const result = await fn(...args);
        setCachedValue(cacheKey, result);

        return result;
    };
}