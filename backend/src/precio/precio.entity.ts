import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';

// Define un tipo para Auto
let Auto: any;

@Entity()
export class Precio extends BaseEntity {
  @Property({ nullable: false, type: 'decimal' })
  valor!: number;

  @Property({ nullable: false })
  fecha!: Date;

  @ManyToOne({ entity: () => Auto })
  auto!: typeof Auto;
}

// Carga la entidad Auto dinámicamente
import('../auto/auto.entity.js').then(mod => { Auto = mod.Auto; });
