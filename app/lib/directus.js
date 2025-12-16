import { createDirectus, rest, authentication } from '@directus/sdk';

const BACKEND_URL = 'http://panel.testcoolify.me';

export const directus = createDirectus(BACKEND_URL)
    .with(authentication("json"))
    .with(rest())