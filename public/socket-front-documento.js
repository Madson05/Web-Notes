import { atualizaTextoEditor } from "./documento.js";

const socket = io()


function emitirTextoEditor(texto){
  socket.emit("texto-editor", texto);
}

socket.on("texto-editor-clientes", (texto) => {  
  atualizaTextoEditor(texto);
});

export { emitirTextoEditor };