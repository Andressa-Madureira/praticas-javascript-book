const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value; // vai pegar no form o "valor=value" do input de texto nome
  resp.innerHTML = `Olá, ${nome}!`; //exibe a resposta do programa
  resp.style.color = "red";
  resp.style.background = "black";
  resp.style.width = "15%";
  resp.style.textAlign = "center";
  resp.style.borderRadius = "5px";
  e.preventDefault(); //impede que a página recarregue automaticamente
});