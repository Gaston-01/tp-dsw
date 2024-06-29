import { Entity, Property, OneToMany, Collection } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { Auto } from '../auto/auto.entity.js';

@Entity()
export class Seguro extends BaseEntity {
  @Property({ nullable: false })
  nombre!: string;

  @Property({ nullable: false })
  cobertura!: string;

  @Property({ nullable: false, type: 'number' })
  costo!: number;

  @OneToMany(() => Auto, auto => auto.seguro)
  autos = new Collection<Auto>(this);
}
