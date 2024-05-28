import { envsafe, str } from 'envsafe';

export const envguard = envsafe({
    GOOGLE_API_KEY: str(),
    BOT_NAME: str(),
    DISCORD_TOKEN: str(),
})