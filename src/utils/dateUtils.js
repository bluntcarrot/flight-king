export const dateUtils = {
  isValidDate: (dateText) => {
    if (dateText) {
      try {
        let errorMessage = ''
        const dateParts = dateText.split('/')
        if (dateParts.length > 0) {
          let day = parseInt(dateParts[0])
          let month = parseInt(dateParts[1])
          let year = parseInt(dateParts[2])

          if (month > 12) {
            errorMessage = 'The month cannot be greater than 12.'
          }

          if (errorMessage === '') {
            // assuming no leap year by default
            var daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            if (year % 4 === 0) {
              // current year is a leap year
              daysPerMonth[1] = 29
            }

            if (day > daysPerMonth[month - 1]) {
              return false
              // errorMessage = "Number of days are more than those allowed for the month";
            }
          }
        } else {
          errorMessage = 'Please enter the date in dd/mm/yyyy format'
        }

        if (errorMessage) {
          alert(errorMessage)
          return false
        }
      } catch (e) {
        alert(e)
        return false
      }
    }
    return true
  },
  dateFormat (dateString) {
    let formattedDate = new Date(dateString)
    let dd = formattedDate.getDate()
    dd = dd + 1
    let mm = formattedDate.getMonth() + 1 // January is 0
    let yyyy = formattedDate.getFullYear()

    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    formattedDate = dd + '/' + mm + '/' + yyyy

    if (!this.isValidDate(formattedDate)) {
      dd = '01'
      let tmpMm = Number(mm)
      mm = tmpMm + 1 > 9 ? tmpMm + 1 : '0' + (tmpMm + 1)
      if (mm === 13) {
        mm = '01'
        yyyy = yyyy + 1
      }
      formattedDate = dd + '/' + mm + '/' + yyyy
    }
    return formattedDate
  }
}
