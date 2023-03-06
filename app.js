const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('<h1>التحويل الى اسم نطاق وحماية النطاق</h1>'))
app.get('*', (req, res) => res.send('<h1>التحويل الى اسم نطاق وحماية النطاق في الروابط</h1>'))

app.listen(5000, () => console.log('connact port 5000'))