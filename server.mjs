import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log('Response from Jaime: ' + req.ip);
    res.send('Response from Jaime: ' + req.ip) 

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})