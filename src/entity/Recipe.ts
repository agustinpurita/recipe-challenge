import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";
import { Category } from "./Category";

@ObjectType()
@Entity()
export class Recipe extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => [String])
  @Column("simple-array")
  ingredients: string[];

  @Field({ description: "Reference to id of user" })
  @Column()
  userId: number;

  @Field({ description: "Reference to id of category" })
  @Column()
  categoryId: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId", referencedColumnName: "id" })
  user: User;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "categoryId", referencedColumnName: "id" })
  category: Category;
}
