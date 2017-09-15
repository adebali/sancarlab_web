
// This code will be injected before initializing the root App
import Vue from 'vue'

// Here we setup messages output to `mini-toastr`
const mySearchFunction = function () {
  let input, filter, ul, li, a, i
  input = document.getElementById('myInput')
  filter = input.value.toUpperCase()
  ul = document.getElementById('myUL')
  li = ul.getElementsByTagName('li')
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0]
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
}

// Activate plugin
Vue.use(mySearchFunction)
