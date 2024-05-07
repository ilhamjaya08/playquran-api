import { Hono } from "hono"

const surah = new Hono().basePath('/surah')

surah.get('/:sid', (c) => {

  const sid = c.req.param('sid')
  const surahFile = sid + '.ts'
  const surahModule = require('../../../data/surah/' + surahFile)
  return c.json({
    status: 200,
    message: 'Success to get surah data',
    data: surahModule
  })
})

surah.get('/:sid/:vid', (c) => {
  const sid = c.req.param('sid')
  const vid = c.req.param('vid')

  const surahFile = sid + '.ts'
  const surahModule = require('../../../data/surah/' + surahFile)
  const surahData = surahModule.default
  let verse;
  for (const ayat of surahData.ayat) {
    if (ayat.ayat_id === parseInt(vid)) {  // Parse vid as integer for comparison
      verse = ayat;
      break;
    }
  }

  return c.json({
    status: 200,
    data: verse
  })
})

export default surah