import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  phone_user: string;

  @Column({ nullable: true })
  image_user: string;

  @Column()
  password_user: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: string;
}
