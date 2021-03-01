const sqlite = require('sqlite3').verbose()

let db = new sqlite.Database('../../db.sqlite3')

db.serialize(() => {
  db.run('CREATE TABLE candidates(id INTEGER PRIMARY KEY, firstName text NOT NULL );',function(err){
    if(err){
      return console.log(err.message)
    }
    console.log('Base de datos creada')
  })
  for(let i=1; i<5; i++){
    db.run(`INSERT into candidates(id,firstName)values(${i},"Manuel");`,function(err){
        if(err){
          return console.log(err.message)
        }
        console.log('Lista de candidatos creada')
    })
  }
})

db.close()