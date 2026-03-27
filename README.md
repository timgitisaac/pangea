# Simple GitHub Photo Website

This is a small static photo gallery that works well with GitHub Pages.

## Files

- `index.html`: the main page
- `styles.css`: the design
- `script.js`: renders the gallery
- `photos.js`: list of photos to show
- `images/`: upload your image files here

## How to add a new picture

1. Upload an image file into `images/`
2. Open `photos.js`
3. Add a new item like this:

```js
{
  file: "images/my-photo.jpg",
  title: "My Photo",
  description: "A short caption"
}
```

## How to publish on GitHub Pages

1. Create a new GitHub repository
2. Upload these files
3. In GitHub, open `Settings` > `Pages`
4. Under `Build and deployment`, choose `Deploy from a branch`
5. Select the main branch and `/ (root)`
6. Save

After a minute or two, GitHub will give you a public website link.

## Important note

This is a static site, so visitors cannot upload pictures directly on the live page.
If you want live uploads from the website itself, we can add a simple backend next.
