import { UserInterface } from '@/lib/interfaces/userInterface'
import dataUsers from '../../../../public/data/users.json'

export class UserService {
  static getListUsers(): UserInterface[] {
    const listUsers: UserInterface[] = dataUsers
    return listUsers
  }
}
