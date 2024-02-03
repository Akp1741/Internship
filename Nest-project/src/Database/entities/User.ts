 /*import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";

 @Entity({name:'users'})
 export class User{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number;

    @Column()
    name:string;

    @Column({unique:true})
    email:string;

    @Column({ nullable: true })
    Password:string;

    @Column()
    createdAt:Date;

    @Column({nullable:true})
    authStrategy:string;
}
*/
// user.ts
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  password: string;

  @CreateDateColumn() // Automatically sets the current timestamp on record creation
  createdAt: Date;

  @Column({ nullable: true })
  authStrategy: string;
}


// import { Exclude, Expose, Transform } from "class-transformer";
// import { Role } from "./role";
// import { Column } from "typeorm";
// import { Options } from "@nestjs/common";

// export class User{
//     id:number;
//     firstName:string;
//     lastName:string;
//     email:string;
//     birthday:Date;

//     @Exclude()
//         password: string;
//         @Expose() 
//         get fullname(): string{
//             return `${this.firstName} ${this.lastName}`;
//         }
        
//     @Expose()
//     get age():Number {
//         const difference= Date.now()-this.birthday.getTime();
//         const age_dif=new Date(difference);
//         return Math.abs(age_dif.getUTCFullYear()-1970);
// }
//     @Transform(({value})=> value.name)
//     role:Role
    
//         constructor(partial:Partial<User>){
//             Object.assign(this,partial)
//         }
//     }