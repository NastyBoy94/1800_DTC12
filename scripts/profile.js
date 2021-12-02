var currentUser

function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userEmail = userDoc.data().email;
                    var userAddress = userDoc.data().address;
                    var userFirstName = userDoc.data().firstname;
                    var userLastName = userDoc.data().lastname;
                    var userProvinceState = userDoc.data().province_state;
                    var userPostalCode = userDoc.data().postalcode;
                    var userCountry = userDoc.data().country;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("usernameInput").value = userName;
                    }
                    if (userEmail != null) {
                        document.getElementById("emailInput").value = userEmail;
                    }
                    if (userAddress != null) {
                        document.getElementById("addressInput").value = userAddress;
                    }
                    if (userFirstName != null) {
                        document.getElementById("firstnameInput").value = userFirstName;
                    }
                    if (userLastName != null) {
                        document.getElementById("lastnameInput").value = userLastName;
                    }
                    if (userProvinceState != null) {
                        document.getElementById("province_stateInput").value = userProvinceState;
                    }
                    if (userPostalCode != null) {
                        document.getElementById("postalcodeInput").value = userPostalCode;
                    }
                    if (userCountry != null) {
                        document.getElementById("countryInput").value = userCountry;
                    }
                })
        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}

//call the function to run it
populateInfo();

function editUserInfo() {
//Enable the form fields
document.getElementById('personalInfoFields').disabled = false;
}

function saveUserInfo() {
    userName = document.getElementById('usernameInput').value;       //get the value of the field with id="nameInput"
    userEmail = document.getElementById('emailInput').value;     //get the value of the field with id="emailInput"
    userAddress = document.getElementById('addressInput').value;       //get the value of the field with id="addressInput"
    userFirstName = document.getElementById('firstnameInput').value;       //get the value of the field with id="firstnameInput"
    userLastName = document.getElementById('lastnameInput').value;       //get the value of the field with id="lastnameInput"
    userProvinceState = document.getElementById('province_stateInput').value;       //get the value of the field with id="province_stateInput"
    userPostalCode = document.getElementById('postalcodeInput').value;       //get the value of the field with id="addressInput"
    userCountry = document.getElementById('countryInput').value;       //get the value of the field with id="addressInput"
    currentUser.update({
            name: userName,
            email: userEmail,
            address: userAddress,
            firstname: userFirstName,
            lastname: userLastName,
            province_state: userProvinceState,
            postalcode: userPostalCode,
            country: userCountry,
        })
        .then(() => {
            console.log("Document successfully updated!");
    })
    document.getElementById('personalInfoFields').disabled = true;
}