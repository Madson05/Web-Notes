import io from "./server";

io.on("connection", (socket) => {
  console.log(`Socket conectado: ${socket.id}`);

  socket.on("texto-editor", (texto) => {
    console.log(texto);
  });
});