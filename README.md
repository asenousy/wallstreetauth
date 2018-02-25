# wallstreetauth test
 A wall street app to log in and view user profile

To start please clone the repo and then `npm install` then `npm test` to check all tests pass and then just `npm start`

The homepage contains a Navbar and WSD login button and footer with social network links

The Navbar is responsive and has mainly 3 links:
* Homepage
* Dashboard
* Logout

Logout will only appear if you are logged in

The dashboard link if pressed while you are not logged in, will cause the login button to twist around to grap your attention for a login needed first

If you click on login button you will be redirected to WSD login screen to use your login credentials, once approved you will be redirected to dashboard page with your details listed, there is also show id button to fetch your ID number using an ajax call

## Aproaches used

I have handlebars for rendering pages and took advantage of partials to avoid repeated code and passed in flags through partials to render differently based on page

I created a jqery plugin elements the capabilty to twist around 

Along side passport.js oauth2, i used `cookie-session` to store the token on client side

 ### Testing

Mocha was used for unit tests and Cucumber was used for behavioural test with a combination of :
 * `super-test` to call the APIs
 * `cheerio` to be able to use jquery for testing rendered views
