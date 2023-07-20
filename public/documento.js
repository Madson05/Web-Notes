
import { emitirTextoEditor } from "./socket-front-documento.js";

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("input", () => {
  emitirTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto){
  textoEditor.value = texto;
}

export { atualizaTextoEditor };
