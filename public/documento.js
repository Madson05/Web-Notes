const socket = io();

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("input", () => {
  socket.emit("texto-editor", textoEditor.value);
});
