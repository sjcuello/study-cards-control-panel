import app from './app'

async function main() {
    await app.listen(3000)
    console.log('Listening on port 3000');
}


main();