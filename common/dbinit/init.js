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
