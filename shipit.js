javascript: (() => {
  if (location.href !== 'https://gitlab.com/bigfooteng/lewis/-/merge_requests/new') {
    location.href = 'https://gitlab.com/bigfooteng/lewis/-/merge_requests/new'
  } else {
    q = document.querySelectorAll.bind(document)
    q('.dropdown-menu-toggle')[1].click()
    setTimeout(() => {
      q('.dropdown-menu-toggle')[1].nextElementSibling.querySelector('a').click()
    }, 500)
    setTimeout(() => {
      q('.dropdown-menu-toggle')[3].click()
    }, 1000)
    setTimeout(() => {
      Array.from(q('.dropdown-menu-toggle')[3].nextElementSibling.querySelectorAll('a'))
        .find(a => a.textContent == 'production')
        .click()
    }, 1500)
    setTimeout(() => {
      q('[type=submit]')[0].click()
    }, 2000)
  }
})()
