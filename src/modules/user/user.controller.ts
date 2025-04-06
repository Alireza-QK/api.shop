import {FastifyRequest, FastifyReply} from "fastify";
import { User } from "./user.entity";
import { UserService } from "./user.service";

const userService = new UserService();

export async function getAllUsers(req: FastifyRequest, reply: FastifyReply) {
    return await userService.listUsers();
}

export async function createUser(req: FastifyRequest, reply: FastifyReply) {
    const {phoneNumber, email} = req.body as any;
    const userExistsByMobile = await userService.findByPhoneNumber(phoneNumber);
    if (userExistsByMobile) {
        return reply.status(400).send({
            success: false,
            message: "Your account already is registered."
        })
    }
    return await userService.createUser(req.body as any);
}
