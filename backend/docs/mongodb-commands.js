//
// use heroclash4geeks

//insert data
db.characters.insertOne({
    name: 'Darth Vader',
    characterClass: 'Sith',
    level: 11,
    hp: 101,
    mana: 22,
    attack: 11,
    items: ['Lightsaber', 'Death Star'],
  })
  
  db.characters.insertOne({
    name: 'Obi-Wan Kenoby',
    characterClass: 'Jedi',
    level: 10,
    hp: 90,
    mana: 32,
    attack: 14,
    items: ['Lightsaber'],
  })
  
  // query
  db.characters.find()
  db.characters.find({ characterClass: 'Jedi' })
  db.characters.find({ mana: { $gt: 30 } })
  db.characters.find({ mana: { $gt: 30 } }, { name: 1, characterClass: 1 })
  db.characters.find({ mana: { $gt: 30 } }, { name: 1, characterClass: 1, _id: 0 })
  db.characters.find({ _id: ObjectId('65155fb42f53abe42bd53cee') }) //change the id according to the autogenerated value
  
  //update
  db.characters.updateOne({ name: 'Darth Vader' }, { $set: { name: 'Anakin Skywalker', characterClass: 'Fallen Jedi' } })
  
  //delete
  db.characters.deleteOne({ characterClass: 'Jedi' })