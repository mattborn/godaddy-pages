const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

const delay = 500

// change the default A record
q('.ux-table')[0].querySelectorAll('tr')[1].querySelectorAll('button')[1].click()
setTimeout(x => setValue(q('[value=Parked]')[0], '185.199.108.153'), delay * 1)
setTimeout(x => g('btnRecordSave').click(), delay * 2)

// create new records
setTimeout(x => {
  g('dnsAddNewRecord').click()
  g('dnsAddNewRecord').click()
  g('dnsAddNewRecord').click()

  const ips = ['09', '10', '11']

  setTimeout(() => {
    q('#dnsRecordIdDropdown-control-menu').forEach(dropdown => {
      dropdown.click()
      setTimeout(x => {
        dropdown.parentNode.querySelectorAll('.dropdown-item')[0].click()
        setTimeout(x => {
          q('#nameDnsFieldInput').forEach(name => setValue(name, '@'))
          q('[placeholder="XX.XX.XX.XX"]').forEach((val, i) => setValue(val, `185.199.1${ips[i]}.153`))
          g('dnsAddNewRecord').parentNode.querySelectorAll('button')[1].click()
        }, delay)
      }, delay)
    })
  }, delay)
}, delay * 3)

const setValue = (element, value) => {
  const prototype = Object.getPrototypeOf(element)
  const valueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set
  valueSetter.call(element, value)
  element.dispatchEvent(new Event('input', { bubbles: true }))
}
