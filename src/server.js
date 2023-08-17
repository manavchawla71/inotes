import { Server, Model, RestSerializer } from "miragejs";
import { users } from "./backend/db/users";
import { loginHandler } from "./backend/controllers/AuthController";
export function makeServer({ environment = "development" } = {}) {
  const server = new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      user: Model,
      notes: Model,
    },

    seeds(server) {
      server.logging = false;
      users.forEach((item) =>
        server.create("user", {
          ...item,
          notes: [],
          archives: [],
          trash: [],
        })
      );
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/login", loginHandler.bind(this));
    },
  });
  return server;
}
