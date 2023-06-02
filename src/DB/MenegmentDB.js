import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

// Здесь находятся все методы взаимодействия с ДБ .

export const checkExistenceDB = async (dbName) => {
  const dbDir = FileSystem.documentDirectory + 'SQLite/';
  const dirInfo = await FileSystem.getInfoAsync(dbDir + dbName);
  if (!dirInfo.exists) createDataBase(dbName)
  else console.log('yes')
}

export async function createDataBase(dbName) {
  const db = await SQLite.openDatabase(dbName)
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS myTest (id INTEGER PRIMARY KEY , category TEXT, place TEXT, description TEXT)'
    );
  }), error => console.log(`create error: ${error}`);
}

export async function select(dbName) {
  const db = await SQLite.openDatabase(dbName)
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM myTest', [], (_, result) => {
        const len = result.rows.length;
        const rows = [];
        for (let i = 0; i < len; i++) {
          rows.push(result.rows.item(i));
        }
        resolve(rows);
      }, (err) => {
        reject(err);
      });
    });
  });
}

export async function insertInto(dbName, id, category, place, description) {
  const dirInfo = await checkExistenceDB(dbName)
  if(!dirInfo) await createDataBase(dbName)

  const db = await SQLite.openDatabase(dbName)
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO myTest (id, category, place, description) VALUES (?, ?, ?, ?)',
      [id, category, place, description],
      (_, result) => {
        console.log(result);
      },
      (_, error) => {
        console.log('Error:', error);
      }
    );
  });
}

export async function deletePost(dbName, id) {
  const db = await SQLite.openDatabase(dbName)
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM myTest WHERE id = ?',
      [id],
      (_, result) => {
        console.log('Rows deleted:', result);
      },
      (_, error) => {
        console.log('Error:', error);
      }
    );
  });
}

export async function updateData(dbName, id, category, place, description) {
  const db = await SQLite.openDatabase(dbName)
  db.transaction(tx => {
    tx.executeSql(`
    UPDATE myTest SET question = '${id}', '${category}', '${place}', '${description}'
    WERE id = '${id}'
    `)
  }), error => console.log(`update error: ${error}`);
}


export async function deleteDB(dbName) {
  const dbDir = FileSystem.documentDirectory + 'SQLite/'
  const dirInfo = await FileSystem.getInfoAsync(dbDir+dbName)
  if(dirInfo) await FileSystem.deleteAsync(dbDir+dbName, {idempotent: true})

  console.log('table deleted');
}


