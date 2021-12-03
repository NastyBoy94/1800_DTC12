## My Web Application (Title)

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)

## General Info
SmartShopper is a one stop shopping tool that helps users that filters stores by reviews, price, shipping, and availability so they do not need to do any research when shopping online. Please use iPhone 6/7/8 Plus resolution for the best viewing experience.

<------------------------- Please use the iPhone 6/7/8+ resolution when viewing our websites ----------------------->
	
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* Firebase
* GitHub
* Trello
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore               # Git ignore file
├── README.md                # Text file outlining the contents of the project folder
├── checkout.html            # Checkout page: this is what the user sees when they wish to checkout
├── item.html                # This is what the user sees if they click on an item to see more information
├── likes.html               # Displays all items the user has liked/favourited thus far.
├── login.html               # Landing page: this is what the user sees when they first arrive at our app
├── profile_page2.html       # This is the user's profile page, where they can see/edit their info
└── search.html              # This is what the user sees after inputting search terms

It has the following subfolders and files:
├── vscode                   # Folder for live server port and Firebase hosting file
├── data                     # Folder for data files used to populate firebase
    /apparel.csv             # CSV file with apparel info that was added to firebase for use with SmartShopper app
├── images                   # Folder for images
    /Nalgene-Retro.jpg       # image for old landing page, no longer in use
    /Wells'_big_water.jpg    # image for old landing page, no longer in use
    /Yellow_water_bottle.jpg # image for old landing page, no longer in use
    /hydro_flask.jpg         # image for old landing page, no longer in use
    /rachelmcadams.jpg       # previous profile picture for profile_page.html - was later changed to a more generic image
    /soft-winter-jacket.jpg  # image for item.html
    /stockprofilepic.jpg     # generic profile picture for profile_page2.html
├── old-designs              # Previous iterations of various webpages that are no longer in use
    /index.html              # Old landing page, no longer in use
    /item2.html              # A second item page that is no longer in use
    /landing.html            # Old post-sign-in page: what the user sees after logging in
    /main.html               # Old design that was scrapped during development - would later be changed to login.html
    /profile.html            # Old profile page
    /sign-up-page.html       # Old sign up page
    /template.html           # Old template for nav/search bar - no longer needed/updated
├── scripts                  # Folder for scripts, including both bootstrap/firebase scripts as well as custom ones
    /firebaseAPI.js          # script to locate our firebase database location
    /my_script.js            # old script template, no longer in use
    /profile.js              # script for profile page to read/write user information to and from firebase
    /search.js               # script to display filtered items based on choices from hamburger menu
    /searchinput.js          # script for search page to populate cards dynamically based on search terms
    writeLikes.js            # script to add items liked by user to their firebase collection in database "Likes"
├── styles                   # Folder for custom styles that aren't part of firebase or bootstrap
    /checkout.css            # CSS file for checkout page
    /likes.css               # CSS file for our likes.html page
    /my_styles.css           # old css fiile, no longer in use
    /profile_page.css        # CSS file for profile page
    /search.css              # Style sheet for our search page
    /sign-up.css             # Style sheet for our login page, login.html
    /style.css               # template for searchbar style
    /template.css            # old template style sheet, no longer in use

## References
* shopifypartners product csvs available at https://github.com/shopifypartners/product-csvs