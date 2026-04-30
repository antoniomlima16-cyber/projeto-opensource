function soma() {
  let a = Number(document.getElementById("n1").value);
  let b = Number(document.getElementById("n2").value);

  let resultado = a + b;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}