import { Entity, Property, OneToMany, ManyToOne, Collection } from '@mikro-orm/core';
import { BaseEntity } from '../shared/db/baseEntity.entity.js';
import { Precio } from '../precio/precio.entity.js';
import { Seguro } from '../seguro/seguro.entity.js';
import { Plan } from '../plan/plan.entity.js';
import { TipoAuto } from '../tipoAuto/tipoAuto.entity.js';

@Entity()
export class Auto extends BaseEntity {
  @Property({ nullable: false })
  modelo!: string;

  @Property({ nullable: false })
  color!: string;

  @Property({ nullable: false })
  diseño!: string;

  @Property({ nullable: false })
  interior!: string;

  @Property({ nullable: false })
  tecnologia!: string;

  @Property({ nullable: false })
  seguridad!: string;

  @Property({ nullable: false })
  servicios!: string;

  @Property({ nullable: false })
  accesorios!: string;

  @OneToMany(() => Precio, precio => precio.auto, { orphanRemoval: true })
  precios = new Collection<Precio>(this);

  @Property({ persist: false })
  get precioFinal(): number | null {
    const latestPrice = this.precios.getItems().sort((a, b) => b.fecha.getTime() - a.fecha.getTime())[0];
    return latestPrice ? latestPrice.valor : null;
  }

  @ManyToOne(() => Seguro)
  seguro!: Seguro;

  @ManyToOne(() => TipoAuto)
  tipoAuto!: TipoAuto;

  @OneToMany(() => Plan, plan => plan.auto, { orphanRemoval: true })
  planes = new Collection<Plan>(this);
}
