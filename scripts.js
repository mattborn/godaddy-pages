const g = document.getElementById.bind(document)

//github.com/markedjs/marked/releases/tag/v5.0.1
marked.use({
  headerIds: false,
  mangle: false,
})

fetch('./readme.md')
  .then(response => response.text())
  .then(text => {
    document.body.innerHTML = marked.parse(text)
    postProcess()
  })

const postProcess = () => {
  // @matt borrow: center sections
  // @matt borrow: indicate external links

  // inject bookmarklet
  const a = document.createElement('a')
  a.href =
    "javascript:(()=>{z=document.getElementsByTagName('script')[0];s=document.createElement('script');s.src=`https://cdn.jsdelivr.net/gh/mattborn/godaddy-pages/dns.js?v=${Date.now()}`;z.parentNode.insertBefore(s,z)})()"
  a.textContent = 'GoDaddy ∫ Pages'
  g('bookmarklet').appendChild(a)
}
