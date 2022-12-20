import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({
    nullable: false,
    unique: true,
    length: 100,
  })
  email: string;

  @Column({
    length: 100,
    nullable: false
  })
  name: string;

  @Column({
    nullable: false
  })
  age: number;

  @CreateDateColumn({
    name: "created_at"
  })
  createdAt: Date;
}
