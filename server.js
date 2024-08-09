import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()

app.use(express.json())

const prisma = new PrismaClient()

app.post('/back', async (req, res) => {

    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        }
    })
    res.status(201).json(req.body)
})

app.get('/back', async (req, res) => {
    let users = []

    if (req.query){

        users = await prisma.user.findMany({
        where: {
            email: req.body.email,
            name: req.body.name,
            password: req.body.password
        }
    })
    
    } else {
        users = await prisma.user.findMany()
    }
    
    res.status(200).json(users)
})



app.listen(3001)