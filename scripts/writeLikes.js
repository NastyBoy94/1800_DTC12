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

function addLikesToUser(heartID) {
    itemSelected = db.collection("Items");
    itemSelected.get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => {    //iterate thru each doc
                var itemName = document.getElementById('ctitle' + heartID).innerHTML;
                if (doc.data().name === itemName) {
                    firebase.auth().onAuthStateChanged((user) => {
                        if (user) {
                            // User logged in already or has just logged in.
                            currentUser = db.collection("users").doc(user.uid).collection("Likes");
                            if (doc.id in currentUser.get() === false) {
                                var itemName = document.getElementById('ctitle' + heartID).innerHTML;
                                var itemText = document.getElementById('ctext' + heartID).innerHTML;
                                var itemImage = document.getElementById('cimage' + heartID).src;
                                var itemPrice = document.getElementById('cprice' + heartID).innerHTML;
                                currentUser.doc(doc.id).set({
                                    name: itemName,
                                    description: itemText,
                                    image: itemImage,
                                    price: itemPrice
                                })
                                console.log('added to likes');
                            }
                    console.log(doc.id);
                    console.log(doc.data());
                        } else {
                            // User not logged in or has just logged out.
                        }
                    });
                 }
                // var title = doc.data().name;
                // var details = doc.data().description;
                // var cost = doc.data().price;
                // var imgURL = doc.data().image;
                // let newcard = CardTemplate.content.cloneNode(true);

                // //update title and text and image
                // newcard.querySelector('.card-title').innerHTML = title;
                // newcard.querySelector('.card-text').innerHTML = details;
                // newcard.querySelector('.card-price').innerHTML = "CAD " + cost;
                // newcard.querySelector('.card-image').src = imgURL;  //hikes.jpg

                // //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);
                // newcard.querySelector('.card-price').setAttribute("id", "cprice" + i);
                // newcard.querySelector('.fa').setAttribute("id", i);

                // //attach to gallery
                // document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

// function addLikesToUser(heartID) {
//     // DocumentReference messageRef = db
//     // .collection("rooms").document("roomA")
//     // .collection("messages").document("message1");
//     // function fireAddStudentToClassroom(studentUserId, classroomId) {

//     //     var db = firebase.firestore();
//     //     var studentsClassroomRef =
//     //         db.collection('student_class').doc(classroomId)
//     //           .collection('students');
    
//     //     studentsClassroomRef
//     //         .doc(studentUserId)
//     //         .set({})
//     //         .then(function () {
//     //             console.log('Document Added ');
//     //         })
//     //         .catch(function (error) {
//     //             console.error('Error adding document: ', error);
//     //         });
//     // }
//     firebase.auth().onAuthStateChanged((user) => {
//         if (user) {
//             // User logged in already or has just logged in.
//             itemSelected = db.collection("Items");
//             currentUser = db.collection("users").doc(user.uid).collection("Likes");
//             var itemName = document.getElementById('ctitle' + heartID).innerHTML;
//             var itemText = document.getElementById('ctext' + heartID).innerHTML;
//             var itemImage = document.getElementById('cimage' + heartID).src;
//             var itemPrice = document.getElementById('cprice' + heartID).innerHTML;
//             console.log(itemName, itemText, itemImage, itemPrice);
//             currentUser.add({
//                 name: itemName,
//                 description: itemText,
//                 image: itemImage,
//                 price: itemPrice
//             })
//             /* db.collection("Items").get()
//                 .then(snap => {
//                     var i = 1;
//                     snap.forEach(doc => {    //iterate thru each doc
//                         // console.log(itemName[i - 1].innerHTML);
//                         // console.log(itemText[i - 1].innerHTML);
//                         // console.log(itemPrice[i - 1].innerHTML);
//                         // console.log(hearts[i - 1].children, hearts[i - 1].previousSibling);
//                         // console.log(document.getElementById('ctitle' + i));
//                         // console.log(document.getElementById('ctext' + i));
//                         // console.log(document.getElementById('cimage' + i));
//                         i++;
//                     })
//                 }) */
//             // console.log(itemName[0], itemDescription[0], itemPrice[0]);
//             // currentUser.get()
//             // .then(userDoc => {
//             //     console.log(userDoc.data());
//             // })
//             // currentUser.add({
//             //     likes: 
//             // })
//         } else {
//             // User not logged in or has just logged out.
//         }
//     });
// }

function insertName() {
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
                    //method #1:  insert with html only
                    //document.getElementById("name-goes-here").innerText = n;    //using javascript
                    //method #2:  insert using jquery
                    $("#name-goes-here").text(user_Name);                         //using jquery
                })
        } else {
            // No user is signed in.
        }
    });
}