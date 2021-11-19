function writeLikes() {
    //define a variable for the collection you want to create in Firestore to populate data
    var likesRef = db.collection("Likes");

    likesRef.add({
      code: "hydro_flask",
      name: "Standard Mouth Bottle with Standard Flex Cap - 21 Oz",
      seller: "Altitude Sport",
      company: "Hydroflask",
      price: "CAD 39.95",
    });
    likesRef.add({
      code: "Nalgene-Retro",
      name: "32oz Wide Mouth Tritan - Retro Clementine",
      seller: "Naglene",
      company: "Naglene",
      price: "CAD 20.75",
    });
    likesRef.add({
      code: "Yellow_water_bottle",
      name: "Day Hydration Tracking Water Bottle",
      seller: "Nordstrom",
      company: "Blink",
      price: "CAD 50.00",
    });
  }