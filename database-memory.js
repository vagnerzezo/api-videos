import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();

  // Set - e como se fosse um array, mas não permite duplicados
  // Map - e como se fosse um objeto

  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];
        return {
          id,
          ...data,
        };
      })
      .filter((video) => {
        if (search) {
          // video.title é o titulo do video
          // includes é um metodo que verifica se o titulo do video inclui o search
          // se inclui, retorna true
          // se não inclui, retorna false
          return video.title.includes(search);
        }
        return true;
      });
  }

  create(video) {
    const videoId = crypto.randomUUID();
    this.#videos.set(videoId, video);
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}
