if (process.BROWSER_BUILD) {
  console.log('ALBUM.js')
  const $ = require('jquery')
  $(document).ready(function () {
    $.getScript('https://flickrembed.com/embed_v2.js.php?source=flickr&layout=responsive&input=www.flickr.com/photos/155072257@N08/albums/72157688639714856&sort=0&by=album&theme=default&scale=fit&limit=100&skin=default&autoplay=false')
  })
}
