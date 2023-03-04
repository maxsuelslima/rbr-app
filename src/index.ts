import app from './app/modules/infra/http/app'

app.listen({
    port: 3000,
    host: '0.0.0.0',
})
    .then((app) => {
        console.log('Server is running on port 3000')
    })
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })
