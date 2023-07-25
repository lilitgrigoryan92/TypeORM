import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    const user = new User()
    user.firstName = "Betty"
    user.lastName = "Smith"
    user.age = 3
    await AppDataSource.manager.save(user)
    console.log("Saved " + user.id)

    const users = await AppDataSource.manager.find(User)
    console.log( users)

}).catch(error => console.log(error))
