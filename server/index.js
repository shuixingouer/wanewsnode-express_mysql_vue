//Express����������ļ�
const api = require('./api/api');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// ���api·��
app.use('/api', api);
// �����˿�
app.listen(3000);
console.log('success listen at port:3000......');