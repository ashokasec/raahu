# Raahu: Metadata Extraction Tool

Raahu is a tool for extracting metadata from web pages. It retrieves key details like the title, description, image, and canonical URL.

## Features
- **Title Extraction**: Fetch the page title.
- **Description Extraction**: Retrieve the meta description or Open Graph description.
- **Image Extraction**: Get the Open Graph image or meta image.
- **Canonical URL Extraction**: Obtain the canonical URL or use the provided URL.

## Technologies Used
- **Backend Framework:** Hono
- **Web Scraping:** Cheerio
- **Data Fetching:** Axios
- **Hosting:** Cloudflare Workers (Serverless Architecture)

## API Endpoints

`GET /` : Returns a welcome message and basic information about Raahu.

`GET /scrape?url={url}` : Extracts metadata from a given URL.

**Demo**: https://raahu.work-shivam.workers.dev/scrape?url=https://github.com/ashokasec

## Limitation

#### **Problem**
As Raahu is hosted on a serverless architecture, it shares the same IP with other instances. This can result in rate limiting or high traffic errors on some websites, such as YouTube.

#### **Solution**
The IP used by Raahu may be flagged if other users have generated high traffic from the same IP, leading to restrictions or errors. To avoid this issue, consider hosting Raahu on your own serverful VPS where the IP is unique and not shared.

## Compatibility
Raahu works with most sites like GitHub and Hashnode. However, sites with strict rate limiting, like YouTube, may encounter issues.

### Thank You