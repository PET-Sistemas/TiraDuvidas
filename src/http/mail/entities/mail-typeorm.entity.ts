import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'mail' })
export class Mail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  to: string;

  @Column({ nullable: false })
  subject: string;

  @Column({ nullable: true })
  template?: string;

  @Column({ type: 'jsonb', nullable: true })
  context?: object;

  @Column({ name: 'additional_information', nullable: true })
  additionalInformation?: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
