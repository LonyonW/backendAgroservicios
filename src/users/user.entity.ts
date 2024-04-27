import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  firstname_user: string;

  @Column()
  lastname_user: string;

  @Column({ unique: true })
  email_user: string;

  @Column({ nullable: true })
  phone_user: string;

  @Column({ nullable: true })
  image_user: string;

  @Column()
  password_user: string;

  //@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  //created_at: string;

  //@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  //updated_at: string;

  // Encriptacion de password
  @BeforeInsert()
  async hashPassword() {
    this.password_user = await hash(
      this.password_user,
      Number(process.env.HASH_SALT),
    );
  }
}
