import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from "typeorm";
  import { Field, Int, ObjectType } from "type-graphql";
  import { Recipe } from "./Recipe";
  
  @ObjectType()
  @Entity()
  export class Category extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;
  
    @Field()
    @Column()
    name: string;
  
    @Field(() => String)
    @CreateDateColumn({ type: "timestamp" })
    createdAt: string;
  
    @Field(() => String)
    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: string;
  
    @OneToMany(() => Recipe, (recipe) => recipe.category)
    recipes: Recipe[];
  }