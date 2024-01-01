// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvnN4jQ4J7MeqDf7G0WVNNe-4YiW7HhnU",
  authDomain: "vanlife-aa27c.firebaseapp.com",
  projectId: "vanlife-aa27c",
  storageBucket: "vanlife-aa27c.appspot.com",
  messagingSenderId: "330166617631",
  appId: "1:330166617631:web:295d396c589777fe8c772a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  //console.log("getVans was called");
  const snapshot = await getDocs(vansCollectionRef);
  //console.log("This is a snapshot", snapshot);
  //console.log("This is a snapshot docs", snapshot.docs.d);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const snapshot = await getDoc(docRef);
  const van = { ...snapshot.data(), id: id };
  //console.log(van);
  //console.log(snapshot);

  return van;
}

export async function getHostVans() {
  console.log("getHostVans was called");

  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

/*
export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

*/

/*
export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}
*/

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
