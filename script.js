// Paths to the two images
const image1 = "Pictures/001.png";
const image2 = "Pictures/002.png";
const image3 = "Pictures/003.png";
const image4 = "Pictures/004.png";
const image5 = "Pictures/005.png";
const image6 = "Pictures/006.png";
const image7 = "Pictures/007.png";
const image8 = "Pictures/008.png";
const image9 = "Pictures/009.png";
const image10 = "Pictures/010.png";

// Keeps track of which image is currently shown
let showingFirstImage = true;

// Get references to HTML elements
const displayedImage = document.getElementById("displayedImage");
const switchButton = document.getElementById("switchButton");

// Set the initial image when the page loads
displayedImage.src = image1;

// Switch between images when the button is clicked
switchButton.addEventListener("click", function () {

    // Check which image is currently displayed and switch
    if (showingFirstImage) {
        displayedImage.src = image2;
    } else {
        displayedImage.src = image1;
    }

    // Flip the boolean so next click switches again
    showingFirstImage = !showingFirstImage;
});
