// import firebase from "../firebase";

import { database } from "../../../firebase";

// const db = firebase.collection("/users");
// database.useEmulator("http://localhost:8080/");

// database.useEmulator("localhost", 8080);  //this is the correct one
const db = database.collection("/users");

class DatabaseContext {
  getAll() {
    return db;
  }

  create(user_details) {
    return db.add(user_details); //this will give you a random id for the document
    // return db.doc(user_details.email).set(user_details); // this will give you an ID based on doc() function
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new DatabaseContext();
