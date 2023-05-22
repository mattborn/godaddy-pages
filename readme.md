# GoDaddy ∫ GitHub Pages

## Reference links

- [Managing a custom domain for your GitHub Pages site → Configuring an apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
- [ify repo](https://github.com/mattborn/ify)

## Disable content security policy

This was a full day of new headaches since the last time I played with script injection. TL;DR: Browsers are better at blocking unexpected scripts. The workaround is to use [a Chrome extension like this](https://chrome.google.com/webstore/detail/always-disable-content-se/ffelghdomoehpceihalcnbmnodohkibj) to disable those features during development. **The bookmarklet won’t work without doing this.**

## Bookmarklet

<div id="bookmarklet"></div>

## Travelogue

- [x] Iterate locally
- [x] Workaround content security policy
- [x] Programmatically set and save A records!
