# Image Uploading App

> This web application allows the user to create product cards by uploading images from a personal computer. The images will be automatically saved to Cloudinary and links to them will be transferred to the database along with the product name and price. After submitting the form, the newly created product card will appear on the screen.

### The goals of creating this application:

The main goals for me as a web developer were to improve my skills in working with:

- MERN stack (Mongoose/MongoDB, Express, React, Node);
- express-fileupload;
- Cloudinary;
- Axios;
- Postman;
- styled components;

### To view the app in the browser, copy and paste the following line to your browser URL address bar:

> NOTE: The app is deployed on the basic (free) account of Render.com, so the rendering is slow. It may take up to 1.5 - 2 minutes for app to load after clicking the website link. Thank you for your patience!

```
https://node-image-upload.onrender.com/
```

### Functionalities:

- submitting the form including file uploading;
- storing the uploaded images outside of the server (on Cloudinary);
- passing the entered data (including the links to the uploaded images stored in Cloudinary) to the Mongo Database collection;
- fetching the products stored in the database on the page load and after the form submittion;
- responsive design (mobile adaptation)
