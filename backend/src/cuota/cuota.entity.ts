import { Entity, Property, ManyToOne } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';

// Define un tipo para Plan
let Plan: any;

@Entity()
export class Cuota extends BaseEntity {
  @Property({ nullable: false })
  monto!: number;

  @Property({ nullable: false })
  fechaVencimiento!: Date;

  @ManyToOne({ entity: () => Plan })
  plan!: typeof Plan;
}

// Carga la entidad Plan dinámicamente
import('../plan/plan.entity.js').then(mod => { Plan = mod.Plan; });
