function getall() {
    // contact items collection
    db.collection("Items").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })

}

function searchinput(searchparam) {
    // contact items collection
    db.collection("Items").where("name", "==", searchparam).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}



function populateCardsDynamically(Docs) {
    let CardTemplate = document.getElementById("CardTemplate");
    let hikeCardGroup = document.getElementById("Items-go-here");
    //console.log(Docs.size);
    while (hikeCardGroup.firstChild){
        hikeCardGroup.removeChild(hikeCardGroup.firstChild)
    }
    Docs.forEach(doc => { //iterate through all documents in the Items collection
         //gets the name field
        var title = doc.data().name;
        var details = doc.data().description;
        var cost = doc.data().price;
        var imgURL = doc.data().image;
        var review = doc.data().ratings;


        let newcard = CardTemplate.content.cloneNode(true);

        newcard.querySelector('.card-title').innerHTML = title;
        newcard.querySelector('.card-text').innerHTML = details;
        newcard.querySelector('.card-price').innerHTML = "CAD $" + cost;
        newcard.querySelector('.card-image').src = imgURL;  //hikes.jpg
        newcard.querySelector('.card-review').innerHTML = "ratings:  " + review + "/5";
        

        // testHikeCard.querySelector('.card-title').innerHTML = ItemName;
        // testHikeCard.querySelector('.card-text').innerHTML = details;
        // // testHikeCard.querySelector('a').onclick = () => setHikeData(hikeID);
        // // testHikeCard.querySelector('i').onclick = () => addLikes(hikeID);
        // testHikeCard.querySelector('img').src = `./images/${hikeID}.jpg`;
        hikeCardGroup.appendChild(newcard);



    })
}


function displaySearch() {
    testSearch = document.getElementById("searchQueryInput").value;
    if (testSearch != null && testSearch != "") {
        db.collection("Items").where("name", "==", testSearch)
            .get()
            .then(searchResult => {
                size = searchResult.size;
                console.log("search");
                populateCardsDynamically(searchResult);
            })
    } else {
        db.collection("Items").get()
            .then(allHikes => {
                populateCardsDynamically(allHikes);
            })
    }
}
// haev an event listent that looks up the search query submit, once that submit event is trigger, call a function
// within that function, input to search 
// when it seems someone click on searchquerysubmit it will call get all function
// document.getElementById("searchQuerySubmit").addEventListener("click", getall)


// function search() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('searchQueryInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }
// database.find
// // get all items
// search - contain defined