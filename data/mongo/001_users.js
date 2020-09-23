db.createUser(
  {
      user: "develop",
      pwd: "dev_password",
      roles:[
          {
              role: "readWrite",
              db:   "brutus-hr-database"
          }
      ]
  }
);