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

app.get('/app/', (req, res) => {
	res.send('200 OK')
})

app.get('/app/roll/', (req, res) => {
	const sides = parseInt(req.params.sides) || 6;
	const dice = parseInt(req.params.dice) || 2;
	const rolls = parseInt(req.params.rolls) || 1;
	const values = roll(sides, dice, rolls);
	res.status(200).json({'sides': sides, 'dice': dice, 'rolls': rolls, 'results': values})
	res.end()
	})

app.get('/app/roll/:sides/', (req, res) => {
	const sides = req.params.sides;
	const values = roll(sides, 2, 1);
	res.status(200).json({'sides': sides, 'dice': 2, 'rolls': 1, 'results': values})
	res.end()
})

app.get('/app/roll/:sides/:dice/', (req, res) => {
	const sides = req.params.sides;
	const dice = req.params.dice;
	const values = roll(sides, dice, 1);
	res.status(200).json({'sides': sides, 'dice': dice, 'rolls': 1, 'results': values})
	res.end()
})

app.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
	const sides = req.params.sides;
	const dice = req.params.dice;
	const rolls = req.params.rolls;
	const values = roll(sides, dice, rolls);
	res.status(200).json({'sides': sides, 'dice': dice, 'rolls': rolls, 'results': values})
	res.end()
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(404).send('404 NOT FOUND')
})

/*app.get('', (req, res, next) => {
	res.status(404).send('404 NOT FOUND')
})*/


app.listen(port, () => {
	console.log("Server listening on port" + port)

})
