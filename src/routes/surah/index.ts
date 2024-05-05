import { Hono } from "hono"
import alfatihah from '../../../data/surah/1-alfatihah'
const surah = new Hono().basePath('/surah')

surah.get('/alfatihah',  (c) => {
    return c.json(alfatihah)
  })

export default surah