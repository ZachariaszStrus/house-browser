db.createUser(
  {
    user: 'estatesAdmin',
    pwd: 'estatesPass',
    roles: [
      {
        role: 'readWrite',
        db: 'house-browser'
      }
    ]
  }
);

db.estates.insert({
  _id: ObjectId(7df78ad8902c),
  name: 'test'
})
