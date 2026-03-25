const request = require('supertest')
const app = require('./app')

describe('GET /', () => {
    it('Debe devolver "Hola Mundo"', async () => {
        const res = await request(app).get('/')
        expect(res.status).toBe(200)
        expect(res.body.message).toBe('Hola Mundo')
    })
})
