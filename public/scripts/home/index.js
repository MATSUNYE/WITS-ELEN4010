'use strict'

function AboutHomePage () {
  let mssg = 'This pages was developed to help resolve family issues \n'
  mssg += ' like keeping tack of members who do not make an contribution.\n'
  mssg += ' This is the first stage of development of the website, as the '
  mssg += 'results\n the page only keeps track of the bills available and their respective cost.\n'
  return mssg
}

function PageFeatures () {
  const pageFeatures = ['Add resource',
    'Add its respective cost',
    'Edit the resource name or cost',
    'Delete resiurces in a bill']
  return pageFeatures
}

function UpdateHomePage () {
  const about = document.getElementById('about')
  let msg = document.createTextNode(AboutHomePage)
  let par = document.createElement('p')
  let lengthPara = 0
  for (let index = 0; index < AboutHomePage().length; index++) {
    lengthPara++
    const msg = document.createTextNode(AboutHomePage()[index])
    par.appendChild(msg)
    if (lengthPara > 70) {
      if (AboutHomePage()[index] === ' ') {
        const newl = document.createElement('br')
        par.appendChild(newl)
        lengthPara = 0
      }
    }
  }
  about.appendChild(par)

  const feat = document.getElementById('features')
  PageFeatures().forEach((element, index) => {
    par = document.createElement('p')
    msg = document.createTextNode((index + 1) + '. ' + element)
    par.appendChild(msg)
    feat.appendChild(par)
  })

  const body = document.getElementById('body')
  par = document.createElement('p')
  msg = document.createTextNode('Click the link below to manage bills:')
  par.appendChild(msg)

  msg = document.createElement('br')
  par.appendChild(msg)

  const link = document.createElement('a')
  link.href = '/bill-divider'
  link.innerHTML = 'manage bills'

  par.appendChild(link)

  body.appendChild(par)
}

fetch('/bill-divider/api/list')
  .then(function (response) {
    if (response.ok) return response.json()
    else throw 'Failed to load classlist: response code invalid!'
  })
  .then(function (data) {
    UpdateHomePage()
  })
  .catch(function (e) {
    alert(e)
  })
