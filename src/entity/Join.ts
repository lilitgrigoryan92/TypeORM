import { Entity,JoinColumn,Column,PrimaryGeneratedColumn,OneToOne } from "typeorm";
import{User} from "./User"

@Entity()
export class Join {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string


    @OneToOne(()=>User)
    @JoinColumn()
    user:User


}