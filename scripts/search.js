//------------------------------------------------------------------
// Read from firestore to get collection Items
// Then for each item in the list,
// create a new "card" from the "template"
// update thet title and text, and other ID's
// attach it to the gallery div
//-------------------------------------------------------------------
function clearcards(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

// populate cards above with items and info from Firebase "Items" collection
function displayCards(collection) {
    let CardTemplate = document.getElementById("CardTemplate");

    db.collection(collection).get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => {    //iterate thru each doc
                var title = doc.data().name;
                var details = doc.data().description;
                var cost = doc.data().price;
                var imgURL = doc.data().image;
                var review = doc.data().ratings;
                let newcard = CardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-price').innerHTML = "CAD $" + cost;
                newcard.querySelector('.card-image').src = imgURL;  //hikes.jpg
                newcard.querySelector('.card-review').innerHTML = "ratings:  " + review + "/5";

                //give unique ids to all elements for future use
                newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);
                newcard.querySelector('.card-price').setAttribute("id", "cprice" + i);
                newcard.querySelector('.card-review').setAttribute("id", "creview" + i);
                newcard.querySelector('.fa').setAttribute("id", i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

// filter items by price from lowest to highest
function filterCardsbyPrice(collection) {
    let CardTemplate = document.getElementById("CardTemplate");

    db.collection(collection).where("price", ">", "0").orderBy("price").get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => {    //iterate thru each doc
                var title = doc.data().name;
                var details = doc.data().description;
                var cost = doc.data().price;
                var imgURL = doc.data().image;
                var review = doc.data().ratings;
                let newcard = CardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-price').innerHTML = "CAD $" + cost;
                newcard.querySelector('.card-image').src = imgURL;  //hikes.jpg
                newcard.querySelector('.card-review').innerHTML = "ratings:  " + review + "/5";

                //give unique ids to all elements for future use
                newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);
                newcard.querySelector('.card-price').setAttribute("id", "cprice" + i);
                newcard.querySelector('.card-review').setAttribute("id", "creview" + i);
                newcard.querySelector('.fa').setAttribute("id", i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

// filter items by availability and display only available items
function filterCardsbyAvail(collection) {
    let CardTemplate = document.getElementById("CardTemplate");

    db.collection(collection).where("availability", "==", "yes").get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => {    //iterate thru each doc
                var title = doc.data().name;
                var details = doc.data().description;
                var cost = doc.data().price;
                var imgURL = doc.data().image;
                var review = doc.data().ratings;
                let newcard = CardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-price').innerHTML = "CAD $" + cost;
                newcard.querySelector('.card-image').src = imgURL;  //hikes.jpg
                newcard.querySelector('.card-review').innerHTML = "ratings:  " + review + "/5";

                //give unique ids to all elements for future use
                newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);
                newcard.querySelector('.card-price').setAttribute("id", "cprice" + i);
                newcard.querySelector('.card-review').setAttribute("id", "creview" + i);
                newcard.querySelector('.fa').setAttribute("id", i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

// filters items by reviews from high to low before populating cards
function filterCardsbyReviews(collection) {
    let CardTemplate = document.getElementById("CardTemplate");

    db.collection(collection).orderBy("ratings", "desc").get()
        .then(snap => {
            var i = 1;
            snap.forEach(doc => {    //iterate thru each doc
                var title = doc.data().name;
                var details = doc.data().description;
                var cost = doc.data().price;
                var imgURL = doc.data().image;
                var review = doc.data().ratings;
                let newcard = CardTemplate.content.cloneNode(true);

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-price').innerHTML = "CAD $" + cost;
                newcard.querySelector('.card-image').src = imgURL;  //hikes.jpg
                newcard.querySelector('.card-review').innerHTML = "ratings:  " + review + "/5";

                //give unique ids to all elements for future use
                newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);
                newcard.querySelector('.card-price').setAttribute("id", "cprice" + i);
                newcard.querySelector('.card-review').setAttribute("id", "creview" + i);
                newcard.querySelector('.fa').setAttribute("id", i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                i++;
            })
        })
}

// output csv data to console for adding to firebase
async function csvToConsole() {
    const response = await fetch('./data/apparel.csv');
    const data = await response.text();
    const list = data.split('\n').slice(1);
    list.forEach(row => {
        /* namely the customer ID, price, item name, and description */
        let re = /(([A-Z]|[a-z]|[0-9]|-|\s|\.|:|\/|\_|\@)*,{1}|("{1}[^"]*"{1}),{1})/;
        let columns = row.split(re);
        console.log(columns[5]);
        console.log(columns);
    });
}
// add csv data to firestore database
async function addCSVData() {
    const response = await fetch('./data/apparel.csv');
    const data = await response.text();
    const list = data.split('\n').slice(1);
    list.forEach(row => {
        /* namely the customer ID, price, item name, and description */
        let re = /(([A-Z]|[a-z]|[0-9]|-|\s|\.|:|\/|\_|\@)*,{1}|("{1}[^"]*"{1}),{1})/;
        let columns = row.split(re);
        let image = columns[97];
        image = image.substring(0, image.length - 1);
        let name = columns[5];
        name = name.substring(0, name.length - 1);
        let description = columns[9]
        description = description.substring(0, description.length - 1);
        let price = columns[77]
        price = price.substring(0, price.length - 1);

        // add to "Items" database if name is not empty
        if (name !== "") {
            db.collection("Items").add({
                name: name,
                description: description,
                price: price,
                image: image
            });
        }
    });
}

displayCards("Items");
