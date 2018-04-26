import beeflex from '../../src/index'

console.log(beeflex)

beeflex({
  design: 750,
  max: 1000
}, option => {
  console.log(option)
})
