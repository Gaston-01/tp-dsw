//import { MikroORM } from '@mikro-orm/core'
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter'
//import { MongoDriver } from '@mikro-orm/mongodb' //lo agrego yo, estoy trantado de solucionar algo
import { MikroORM } from '@mikro-orm/mongodb'; // Importa desde el paquete del controlador

export const orm = await MikroORM.init({
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  dbName: 'hc4gmo',
  //type: 'mongo',
  clientUrl: 'mongodb://localhost:27017',
  highlighter: new MongoHighlighter(),
  //driver: MongoDriver,  // Usa la clase del controlador de MongoDB, USAR driver: 'mongo', tira error
  debug: true,
  schemaGenerator: {
    //never in production
    disableForeignKeys: true,
    createForeignKeyConstraints: true,
    ignoreSchema: [],
  },
})

export const syncSchema = async () => {
  const generator = orm.getSchemaGenerator()
  /*   
  await generator.dropSchema()
  await generator.createSchema()
  */
  await generator.updateSchema()
}