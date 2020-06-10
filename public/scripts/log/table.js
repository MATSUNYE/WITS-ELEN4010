'use strict'

const expenditure = []
expenditure.push(['Expenses', 'Cost (R)'])

const totals = []

totals.push(['total items', 'total cost'])
function BillsLog (givenBills) {
  givenBills.forEach(function (bill) {
    expenditure.push([bill.resource, bill.price])
  }
  )

  // The first table that contains all the costs and expenses (elements)
  const bodyOne = document.getElementsByTagName('body')[0]
  const tbleOne = document.createElement('table')
  const tbleBodyOne = document.createElement('tbody')

  // The table that contains the totals
  const bodyTwo = document.getElementsByTagName('body')[0]
  const tbleTwo = document.createElement('table')
  const tbleBodyTwo = document.createElement('tbody')

  // filling up table 1
  for (let i = 0; i < expenditure.length; i++) {
    const row = document.createElement('tr')

    for (let j = 0; j < expenditure[0].length; j++) {
      const cell = document.createElement('td')
      const cellText = document.createTextNode(expenditure[i][j])
      cell.appendChild(cellText)
      row.appendChild(cell)
    }

    tbleBodyOne.appendChild(row)
  }

  // filling up table 2
  const totalItems = expenditure.length
  let totalCost = 0

  for (let i = 1; i < expenditure.length; i++) {
    totalCost += parseFloat(expenditure[i][1])
  }

  totals.push([totalItems - 1, totalCost])

  for (let i = 0; i < totals.length; i++) {
    const row = document.createElement('tr')

    for (let j = 0; j < totals[0].length; j++) {
      const cell = document.createElement('td')
      const cellText = document.createTextNode(totals[i][j])
      cell.appendChild(cellText)
      row.appendChild(cell)
    }

    tbleBodyTwo.appendChild(row)
  }

  tbleOne.appendChild(tbleBodyOne)

  bodyOne.appendChild(tbleOne)

  tbleOne.setAttribute('border', '2')

  // table two appending
  tbleTwo.appendChild(tbleBodyTwo)

  bodyTwo.appendChild(tbleTwo)

  tbleTwo.setAttribute('border', '2')
}

fetch('/bill-divider/api/list')
  .then(function (response) {
    if (response.ok) return response.json()
    else throw 'Failed to load classlist: response code invalid!'
  })
  .then(function (data) {
    BillsLog(data)
  })
  .catch(function (e) {
    alert(e)
  })
