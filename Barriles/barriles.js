var Pass = process.env['Pass']
var Ubicacion1 = process.env['Ubicacion1']

function Barril1() {
  if(localStorage.getItem("DonPass") == Pass){
    alert(Ubicacion1)
  }
  else {
  let Prompt = prompt("Ingresa la contraseña")
    localStorage.setItem("DonPass", `${Prompt}`)
  }
}