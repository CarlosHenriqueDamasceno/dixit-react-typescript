class SocketService
{

  socketClient;

  connect(url){

    return new Promise(() => {

      var Soket         = require('sockjs-client');
      var Stomp         = require('stompjs');
      var socket        = new Soket('http://localhost:8080/ws');
      this.socketClient = Stomp.over(socket);
      this.socketClient.connect({}, this.#onSocketConnected, this.#onSocketConnectionFails);
    })
  }

  #onSocketConnectionFails(error)
  {
    console.log(error);
  }

  #onSocketConnected()
  {
    this.socketClient.subscribe("/topic/response", (payload) => {
      const message = JSON.parse(payload.body);
      console.log(message);
    });
  }
}

export default new SocketService();