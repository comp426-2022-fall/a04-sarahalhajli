#!/usr/bin/env node
import minimist from 'minimist';
import { roll } from '../lib/roll.js'
import express from 'express'

const args = minimist(process.argv.slice(2));

const express = require('express')
const app = express()

const port = args.port || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app/', (req, res, next) => {
	res.send('200 OK')
})

app.get('/app/roll/', (req, res, next) => {
	res.send('filler code')
})

app.get('/app/roll/:sides/', (req, res, next) => {
	res.send('filler code')
})

app.get('/app/roll/:sides/:dice/', (req, res, next) => {
	res.send('filler code')
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res, next) => {
	res.send('filler code')
})

app.listen(port, () => {
	console.log("Server listening on port" + port)

})
