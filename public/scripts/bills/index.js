'use strict'
//-----displaying the llist
  fetch('/bill-divider/api/list') // Returns a Promise for the GET request
    .then(function (response) {
    // Check if the request returned a valid code
      if (response.ok) return response.json() // Return the response parse as JSON if code is valid, →
      else throw 'Failed to load classlist: response code invalid!'
    })
    .then(function (data) { // Display the JSON data appropriately
    // Retrieve the classList outer element
      const billList = document.getElementById('classList')

      // Iterate through all bills
      data.forEach(function (bill) {
      // Create a new list entry
        const li = document.createElement('LI')
        const liText = document.createTextNode(
          bill.resource + ' - R' + bill.price
        )
        // Append the bills to the list element
        li.className += 'bill'

        // Append list text to list item and list item to list
        li.appendChild(liText)
        billList.appendChild(li)
      })
    })
    .catch(function (e) { // Process error for request
      alert(e) // Displays a browser alert with the error message.
    // This will be the string thrown in line 7 IF the
    // response code is the reason for jumping to this
    })

    //---setting the user
fetch('/bill-divider/api/users') // Returns a Promise for the GET request
.then(function (response) {
// Check if the request returned a valid code
  if (response.ok) return response.json() // Return the response parse as JSON if code is valid, →
  else throw 'Failed to load users[]: response code invalid!'
})
.then(function (data) { // Display the JSON data appropriately
// Retrieve the classList outer element
 // const usersknown = document.getElementById('heading_1')

  // Iterate through all bills
  data.forEach(function (bill) {
  // Create a new list entry
    console.log(`usename enter : ${bill}`)
    
    let headerElement = document.getElementById('header_1')
    headerElement.innerHTML = 'Hi! '+ bill + ' Manage your Bills.' 
    
  })
})
.catch(function (e) { // Process error for request
  alert(e) // Displays a browser alert with the error message.
// This will be the string thrown in line 7 IF the
// response code is the reason for jumping to this
})