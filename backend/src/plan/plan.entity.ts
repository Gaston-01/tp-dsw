import { Entity, Property, OneToMany, ManyToOne, Collection } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { Cuota } from '../cuota/cuota.entity.js';

// Define un tipo para Auto
let Auto: any;

@Entity()
export class Plan extends BaseEntity {
  @Property({ nullable: false })
  nombre!: string;

  @Property({ nullable: false })
  descripcion!: string;

  @ManyToOne({ entity: () => Auto })
  auto!: typeof Auto;

  @OneToMany(() => Cuota, cuota => cuota.plan, { orphanRemoval: true })
  cuotas = new Collection<Cuota>(this);
}

// Carga la entidad Auto dinámicamente
import('../auto/auto.entity.js').then(mod => { Auto = mod.Auto; });
