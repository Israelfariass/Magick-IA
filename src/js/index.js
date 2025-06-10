const btnFiltrar = document.querySelector(".btn-filtrar");
const cartas = document.querySelectorAll(".carta");
const filtroCategoria = document.getElementById("categoria");
const filtroPreco = document.getElementById("preco");

btnFiltrar.addEventListener("click", () => {
  const categoriaSelecionada = filtroCategoria.value.toLowerCase();
  const precoMax = parseFloat(filtroPreco.value);

  cartas.forEach((carta) => {
    const categoriaCarta = carta.dataset.categoria.toLowerCase();
    const precoCarta = parseFloat(carta.dataset.preco);

    const categoriaValida = categoriaSelecionada === "" || categoriaSelecionada === categoriaCarta;
    const precoValido = isNaN(precoMax) || precoCarta <= precoMax;

    if (categoriaValida && precoValido) {
      carta.style.display = "block";
    } else {
      carta.style.display = "none";
    }
  });
});
