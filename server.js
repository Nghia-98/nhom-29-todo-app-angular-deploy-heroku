const express = require("express")
const app = express()

app.use(express.static('./dist/TodoApp-Angular'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/TodoApp-Angular/'})
})

app.listen(process.env.PORT || 8080);

