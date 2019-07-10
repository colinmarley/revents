import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCq4mNq39g97x-WhWZh2P2b7ZNEK6MxUxQ',
	authDomain: 'revents-245522.firebaseapp.com',
	databaseURL: 'https://revents-245522.firebaseio.com',
	projectId: 'revents-245522',
	storageBucket: '',
	messagingSenderId: '707475352699',
	appId: '1:707475352699:web:d91970c4c23a7eed',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
