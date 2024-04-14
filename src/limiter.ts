import { rateLimiter } from "hono-rate-limiter";

export const limiter = rateLimiter({
    windowMs: 10 * 60 * 1000,
    limit: 3,
    standardHeaders: "draft-6",
    keyGenerator: () => Math.random().toString(16).slice(-8, -1),
});
