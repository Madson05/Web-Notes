import io from "./server";

io.on("connection", (socket) => {
  console.log(`Socket conectado: ${socket.id}`);
});