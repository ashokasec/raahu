export const hero_data = {
    message: 'Welcome to Raahu!',
    description: 'Raahu is a web scraping tool designed to extract metadata from web pages. It fetches essential details like the title, description, image, and canonical URL of a webpage.',
    contact: {
        github: 'https://github.com/ashokasec',
        twitter: 'https://x.com/ashokasec'
    },
    code: 'https://github.com/ashokasec/raahu',
    note: 'Feel free to explore and use Raahu to gather metadata for your needs!',
    warning: "Currently, Raahu is hosted on a serverless environment. This may lead to high traffic errors from some websites, like YouTube, due to requests coming from Cloudflare workers, not directly from your IP. The only effective solution is to host Raahu on your own serverful VPS. This way, your IP is new to the websites, and they are more likely to allow access. I will soon release the code for serverful VPS deployment. If you can't wait, you’re welcome to set up Raahu on a serverful VPS yourself. If you do, please let me know—I’d be excited to see what you come up with!",
    compatibility: "Raahu works well with most sites like GitHub, Hashnode, and others, making it a versatile tool for metadata extraction."
}