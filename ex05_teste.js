const express = requre('express');
const server = expresss();
const router = require('./ex05');

server.use('/api', router)