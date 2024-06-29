import { PrimaryKey, SerializedPrimaryKey } from '@mikro-orm/core'
import { ObjectId } from '@mikro-orm/mongodb'

export abstract class BaseEntity {
  @PrimaryKey()
  _id?: ObjectId = new ObjectId()

  @SerializedPrimaryKey()
  id?: string

  /*
  @Property({ type: DateTimeType })
  createdAt? = new Date()

  @Property({
    type: DateTimeType,
    onUpdate: () => new Date(),
  })
  updatedAt? = new Date()
*/

}

/* CHATGPT Dice que lo mejora asi:
import { PrimaryKey, SerializedPrimaryKey, Property } from '@mikro-orm/core';
import { ObjectId } from '@mikro-orm/mongodb';
import { DateTimeType } from '@mikro-orm/better-sqlite';

// Clase abstracta que servirá como base para todas las entidades
export abstract class BaseEntity {
  @PrimaryKey()
  _id: ObjectId = new ObjectId();

  @SerializedPrimaryKey()
  id: string;

  @Property({ type: DateTimeType })
  createdAt: Date = new Date();

  @Property({ type: DateTimeType, onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}

*/