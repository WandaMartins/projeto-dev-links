function toggleMode() {
    const hmtl = document.documentElement

//  condicionais: condições para tirar e/ou colocar a classe desejada.
//    if(hmtl.classList.contains('light')) {
//        hmtl.classList.remove('light')
//    }  else {
//            hmtl.classList.add('light')
//        }

hmtl.classList.toggle('light')

//pegar a img
const img = document.querySelector('#profile img')
//substituir a img
if(hmtl.classList.contains('light')) {
//se tiver light mode, adc a img
img.setAttribute('src', './assets/avatar-light.png')
} else {
//se tiver sem light mode, manter a img
img.setAttribute('src', './assets/avatar.png')
}
  }