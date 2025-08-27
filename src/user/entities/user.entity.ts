import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "usuario"})
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ name: "nombre", type: "varchar" })
    firstname: string;

    @Column({ name: "apellido_paterno", type: "varchar" })
    lastNamePaternal: string;

    @Column({ name: "apellido_materno", type: "varchar" })
    lastNameMaternal: string;

    @Column({ name: "edad", type: "int" })
    age: number;

    @Column({ name: "correo_electronico", type: "text" })
    email: string;

    @Column({ name: "activo", type: "boolean" , default: true})
    isEnabled: boolean;

    @Column({ name: "cuenta_bloqueda", type: "boolean" , default: false})
    accountLocked: boolean;

    @Column({ name: "email_verificado", type: "boolean" , default: false})
    emailVerified: boolean;

    @CreateDateColumn({name: "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;

    @DeleteDateColumn({name: "deleted_at"})
    deletedAt: Date;
}
