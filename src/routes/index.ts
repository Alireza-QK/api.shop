import fastify, { FastifyInstance } from "fastify";
import { userRoutes } from "../modules/user/user.routes";

export async function Routes(fastify: FastifyInstance) {
  fastify.register(userRoutes, { prefix: "/api/users" });
}
