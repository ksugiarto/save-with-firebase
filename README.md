## Save With Firebase

This is a **research** repository, for me understanding Firebase basic concept. Firebase that has been used is `firebase-admin` which is for backend need. The one who access the Firebase is the controller.

#### Installation

1. Do normal clone
2. Then install pre-requisite libraries with `npm install`
3. Setup your Firebase service account (see [Firebase Official Tutorial](https://firebase.google.com/docs/admin/setup#add_firebase_to_your_app))
4. Put that `service_account.json` on the root level along with `app.js`
5. Edit `app.js` line 33 to your Firebase database
6. Run the server using `npm run dev`