import { Entity, Property, OneToMany, Collection } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { Auto } from '../auto/auto.entity.js';

@Entity()
export class TipoAuto extends BaseEntity {
  @Property({ nullable: false })
  descripcion!: string;

  @OneToMany(() => Auto, auto => auto.tipoAuto)
  autos = new Collection<Auto>(this);
}
