import { Hono } from "hono"
import alfatihah from '../../../data/surah/1'
const surah = new Hono().basePath('/surah')

surah.get('/alfatihah',  (c) => {
    return c.json(alfatihah)
  })

surah.get('/:id', (c) => {

  const id = c.req.param('id')
  const surahFile = id + '.ts'
  const surahData = require('../../../data/surah/' + surahFile)
  return c.json({
    status: 200,
    message: 'Success to get surah data',
    data: surahData
  })
})

export default surah