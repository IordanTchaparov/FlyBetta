import React, { useContext, useState, useEffect } from "react";
import { auth } from "/Users/iordantchaparov/Documents/Flybetta/Git/FlyBetta/src/firebase"; //this is not good importing
import firebase from "firebase";

//Checking if the emulator can be used
firebase.auth().useEmulator("http://localhost:9099/");

export function signup(email, password) {
  return auth.createUserWithEmailAndPassword(email, password);
}

export function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

// export function userChanged(user) {
//   return auth.onAuthStateChanged(user);
// }
