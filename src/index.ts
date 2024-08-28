import axios from 'axios'
import { Hono } from 'hono'
import * as cheerio from 'cheerio';
import { cors } from 'hono/cors';
import { validateURL } from '@/utils/cleaner';
import { hero_data } from '@/temp/data';
import { handleAxiosError } from '@/utils/handle-axios-error';

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET']
}))

app.get('/', (c) => { return c.json(hero_data) })

app.get('/scrape', async (c) => {
  const url = c.req.query("url")

  if (!url) return c.text("Please Provide a URL to get Meta.", 400)

  const validationResult = validateURL(url)
  if (!validationResult.isValid) {
    return c.text(validationResult.errorMessage!, 400)
  }

  try {
    const { data } = await axios.get(url, {
      timeout: 5000
    });
    const $ = cheerio.load(data);

    const metadata = {
      title: $('title').text() || 'No title found',
      description: $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || 'No description found',
      image: $('meta[property="og:image"]').attr('content') || 'No image found',
      url: $('link[rel="canonical"]').attr('href') || $('meta[property="og:url"]').attr('content') || url
    };

    return c.json(metadata, 200)
  } catch (error) {
    console.log(error)
    const errorResponse = handleAxiosError(error);
    return c.json(errorResponse, 500);
  }
})

export default app