express-locals
===
utility middleware to load locals into express responses; this comes in handy when injecting modules to template engine.

```
import fs from 'fs'
import path from 'path'
import express from 'express'
import locals from 'express-locals'

import routes from './routes'

export default express()
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'jade')
  .use(locals({fs: fs, path: path}))
  .use(routes)
  .use(function(err, req, res, next) {
    res.status(err.status || 500)
  })
```

locals are automatically merged on `app.render` and therefore `res.render`

```
mixin base64_png(filename)
  - var file = fs.readFileSync(filename)
  - var base = new Buffer(file, 'utf8').toString('base64')
  img(src="data:image/png;base64!{base64}")

+base64_png('path/to/my/file')
```
