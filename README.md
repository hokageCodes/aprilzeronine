# Fullstack E-commerce Web Application
### MERN stack with NextJs, Redux and Next Auth, Css in JS with CSS Modules mixed with Sass 


## Build Process
### Setting Up
- Created Next App, Cleaned up, and Reset CSS global styles.
- Created Database with MongoDB compass and did the connecting and Disconnecting to the DB functionality.
- Set Up Redux, Redux toolkit, and Redux persisit!
- Made global variables accessible in next config.

### Header Component
- Ad Banner at the top of the Page
- Navigation (Top) Header and Links Added.
- Top Menu -> Added state for if user is signed in or not, and also the links under the user's account.
- Worked on showing the user account state based on if user is logged in or not (No auth yet).
- Added and styled the Logo, search field, and the cart option(cart length created in and gotten from redux store).

### Footer Component
- Added main footer links
- Added footer socials and Newsletter input (News letter isn't functional yet)
- Added Payment and copyright UI
- Responsive Footer

### Location Detection
- Used [THIS API](https://ipregistry.co/) for location detection on the site. Whatever country a user is visiting the site from is going to show accordingly. 

### Authentication using Next-auth
- Installed next-auth, and did a test with the provided data in the docs to make sure it works first.
