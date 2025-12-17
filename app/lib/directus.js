import { createDirectus, rest, authentication } from '@directus/sdk';

export const directus = createDirectus(process.env.BACKEND_URL)
    .with(authentication("json"))
    .with(rest())