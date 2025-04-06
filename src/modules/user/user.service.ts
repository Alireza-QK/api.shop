import { AppDataSource } from "@config/db";
import { User } from "./user.entity";
import { Repository } from "typeorm";

export class UserService {
  private userRepo: Repository<User>;

  constructor() {
    this.userRepo = AppDataSource.getRepository(User);
  }

  async createUser(data: Partial<User>) {
    const user = this.userRepo.create(data);
    return await this.userRepo.save(user);
  }

  async findByPhoneNumber(phoneNumber: string) {
    return await this.userRepo.findOneBy({ phoneNumber });
  }

  async findByEmail(email: string) {
    return await this.userRepo.findOneBy({ email });
  }

  async findById(id: number) {
    return await this.userRepo.findOneBy({ id });
  }

  async updateUser(id: number, data: Partial<User>) {
    await this.userRepo.update(id, data);
    return await this.findById(id);
  }

  async deleteUser(id: number) {
    return await this.userRepo.softDelete(id);
  }

  async listUsers() {
    return await this.userRepo.find({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        email: true,
        role: true,
        isVerified: true,
        isActive: true,
        createdAt: true,
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
