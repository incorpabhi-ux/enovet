const fs = require('fs')
const path = require('path')
const https = require('https')

const brands = [
  {
    name: 'Google',
    url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    filename: 'google.png'
  },
  {
    name: 'Microsoft',
    url: 'https://img.icons8.com/color/480/microsoft.png',
    filename: 'microsoft.png'
  },
  {
    name: 'HubSpot',
    url: 'https://cdn.worldvectorlogo.com/logos/hubspot-1.svg',
    filename: 'hubspot.png'
  },
  {
    name: 'Meta',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png',
    filename: 'meta.png'
  },
  {
    name: 'Shopify',
    url: 'https://cdn.worldvectorlogo.com/logos/shopify-1.svg',
    filename: 'shopify.png'
  },
  {
    name: 'Adobe',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/2560px-Adobe_Systems_logo_and_wordmark.svg.png',
    filename: 'adobe.png'
  }
]

const downloadFile = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`))
        return
      }

      const fileStream = fs.createWriteStream(filepath)
      response.pipe(fileStream)

      fileStream.on('finish', () => {
        fileStream.close()
        console.log(`Downloaded: ${filepath}`)
        resolve()
      })

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}) // Delete the file if there's an error
        reject(err)
      })
    }).on('error', (err) => {
      reject(err)
    })
  })
}

const downloadAllLogos = async () => {
  const brandsDir = path.join(process.cwd(), 'public', 'brands')

  // Create brands directory if it doesn't exist
  if (!fs.existsSync(brandsDir)) {
    fs.mkdirSync(brandsDir, { recursive: true })
  }

  console.log('Starting brand logo downloads...')

  for (const brand of brands) {
    const filepath = path.join(brandsDir, brand.filename)
    try {
      await downloadFile(brand.url, filepath)
    } catch (error) {
      console.error(`Error downloading ${brand.name} logo:`, error.message)
    }
  }

  console.log('All brand logos downloaded successfully!')
}

downloadAllLogos() 