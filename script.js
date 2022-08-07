const packages = [
 {
  package: '10k',
  price: 8
 },
 {
  package: '50k',
  price: 12
 },
 {
  package: '100k',
  price: 16
 },
 {
  package: '500k',
  price: 24
 },
 {
  package: '1m',
  price: 36
 }
]

let isAnnual = false
let index = 0
let currentPackage =  {
 package: '10k',
 price: 8
}


updateUI(currentPackage, isAnnual)

const rangeInput = document.querySelector('.card__range-input')
const toggler = document.querySelector('.checkbox__check')

toggler.addEventListener('input', e => {
 isAnnual = e.target.checked
 updateUI(currentPackage, isAnnual)
})

rangeInput.addEventListener('input', (e) => {
 index = e.target.value
 currentPackage = packages[index]
 updateUI(currentPackage, isAnnual)
})


function updateUI(currentPackage, isAnnual){
 const cardStatistics = document.querySelector('.card__statistics')
 const cardAmount = document.querySelector('.card__amount')
 const cardPeriod = document.querySelector('.card__period')
 const checkbox = document.querySelector('.checkbox')
 const amount = isAnnual ? (currentPackage.price * 12 - currentPackage.price * 12 * .25) : currentPackage.price
 cardStatistics.textContent = `${currentPackage.package} pageviews`
 cardAmount.textContent = `$${amount}.00`
 cardPeriod.textContent = isAnnual ? ' / year' : ' / month'
 isAnnual ? checkbox.classList.add('checked') : checkbox.classList.remove('checked')
}







