import { emitirTextoEditor } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textoEditor = document.getElementById("editor-texto");
const tituloDocumento = document.getElementById("titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem título";


textoEditor.addEventListener("input", () => {
  emitirTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto){
  textoEditor.value = texto;
}

export { atualizaTextoEditor };
