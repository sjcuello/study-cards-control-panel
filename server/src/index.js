import app from './app'
import { config } from './config/index'

async function main() {
    await app.listen(config.port)
    console.log(`Listening on port ${config.port}`);
}

main();