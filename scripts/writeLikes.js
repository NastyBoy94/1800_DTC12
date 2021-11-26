function insertNameDontTouch() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {                                                                 
            // Do something for the current logged-in user here: 
            console.log(user.uid);
            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid);
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    var user_Name = userDoc.data().name;
                    console.log(user_Name);
                    //method #2:  insert using jquery
                    $("#name-goes-here").text(user_Name);                         //using jquery
                })
        } else {
            // No user is signed in.
        }
    });
}

function addUserLikes() {
    //define a variable for the collection you want to create in Firestore to populate data
    // var likesRef = db.collection("Likes");

    // likesRef.add({
    //   code: "hydro_flask",
    //   name: "Standard Mouth Bottle with Standard Flex Cap - 21 Oz",
    //   seller: "Altitude Sport",
    //   company: "Hydroflask",
    //   price: "CAD 39.95",
    // });
    // likesRef.add({
    //   code: "Nalgene-Retro",
    //   name: "32oz Wide Mouth Tritan - Retro Clementine",
    //   seller: "Naglene",
    //   company: "Naglene",
    //   price: "CAD 20.75",
    // });
    // likesRef.add({
    //   code: "Yellow_water_bottle",
    //   name: "Day Hydration Tracking Water Bottle",
    //   seller: "Nordstrom",
    //   company: "Blink",
    //   price: "CAD 50.00",
    // });
    var users = db.collection("users");
    

    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {                                                                 
            // Do something for the current logged-in user here: 
            console.log(user.uid);
            // //go to the correct user document by referencing to the user uid
            // currentUser = db.collection("users").doc(user.uid);
            // //get the document for current user.
            // currentUser.get()
            //     .then(userDoc => {
            //         var user_Name = userDoc.data().name;
            //         console.log(user_Name);
            //         //method #1:  insert with html only
            //         //document.getElementById("name-goes-here").innerText = n;    //using javascript
            //         //method #2:  insert using jquery
            //         $("#name-goes-here").text(user_Name);                         //using jquery
            //     })
        } else {
            // No user is signed in.
        }
    });
  }