#  photo_app
React photo application: <a href="https://aldb.github.io/photo_app/src/client/index.html">demo</a>.

Photo apps challenge. Using the “popular” feature of the <b>500px photos API</b> to source the photos and Javascript, HTML and CSS necessary to display a constant stream of photos to the page.

##### Local setup with webpack.

1. Clone/download repository and open folder in Terminal.
2. <code>npm install</code>
3.	<code>npm run dev</code>
4.	Open <code>photo_app/src/index.html</code> in your chrome browser.

##### Render test with Jest:.
<code>npm test</code>

##### Requirements
* Masonry layout: The photos should be displayed in a reactive masonry layout. 
* Photos: Each “tile” in the layout should display a photo and its name beneath it. The background of the tile should be white.
* View count: If the cursor hovers over a tile, the number of times that photo has been viewed on 500px should appear over the photo. Moving the cursor off, removes the number.
* Infinite scroll: You can choose the size of the initial photo set to be displayed on the page, but when a user scrolls to the bottom of the page, the next photos in the stream should load in. You can design the UX of this feature, the only constraint is that it should not require a click by the user, only the scroll.
