import fastify, { FastifyInstance } from "fastify";
import { createUser, getAllUsers } from "./user.controller";


export async function userRoutes(fastify: FastifyInstance) {
    fastify.get("/", getAllUsers)
    fastify.post("/create", createUser)
}
