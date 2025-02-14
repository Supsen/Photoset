let currentImage = 1;
const totalImages = 42;
const imagePath = "img/";

function showNextImage() {
    console.log("Next button clicked!");

    const card = document.getElementById("imageCard");
    const mainButton = document.getElementById("mainButton");
    const buttonContainer = document.getElementById("buttonContainer");
    const nextButton = document.getElementById("nextButton");
    const backButton = document.getElementById("backButton");
    const valentineText = document.getElementById("valentineText"); // Final message
    const imageTitle = document.getElementById("imageTitle"); // Image title

    if (mainButton.style.display !== "none") {
        // First click: Show first image, hide Valentine's text, and display image title
        card.style.display = "flex";
        setTimeout(() => { card.style.opacity = "1"; }, 50);
        mainButton.style.display = "none"; // Hide the main button
        buttonContainer.style.display = "flex"; // Show navigation buttons
        nextButton.style.display = "block"; // Ensure nextButton is visible
        backButton.style.display = "none"; // Hide back button initially
        valentineText.style.display = "none"; // Hide Valentine's message
        imageTitle.style.display = "block"; // Show image title

        currentImage = 1;
        updateImage();
        return;
    }

    console.log("Before update: ", currentImage);

    // Ensure currentImage updates correctly
    if (currentImage < 34) {
        currentImage += 1;
        updateImage();
    }

    console.log("After update: ", currentImage);

    // When reaching img34, hide everything and show only the Valentine message
    if (currentImage === 34) {
        card.style.display = "none"; // Hide the image
        buttonContainer.style.display = "none"; // Hide navigation buttons
        imageTitle.style.display = "none"; // Hide image title
        valentineText.style.display = "block"; // Show Valentine text again
    }

    // Ensure back button is visible after first image
    if (currentImage > 1 && currentImage < 34) {
        backButton.style.display = "block";
    }
}

function showPreviousImage() {
    const backButton = document.getElementById("backButton");

    currentImage--;
    if (currentImage < 1) {
        currentImage = totalImages;
    }
    updateImage();

    // Hide Back button again if returning to img01
    if (currentImage === 1) {
        backButton.style.display = "none";
    }
}

const titles = {
    1: "ใครเอ่ยย?",
    2: "ชอบกินสุดๆ",
    3: "ร้านแรกที่เราไปกินกันสองคน 💗 14/3/23",
    4: "ไก่ทอดดด",
    5: "Milkshake & French file",
    6: "🍣",
    7: "ทำกับข้าวอร่อยสุดๆ",
    8: "อร่อยทุกอย่างง",
    9: "ท่าประจำ สองนิ้วมองโต๊ะข้างๆ 5555",
    10: "ขอบคุณนะที่ทำกับข้าวให้เรากินตลอด ",
    11: "ต่อจิ๊กซอว์ด้วยกันครั้งแรก (เริ่มสี่ทุ่ม)",
    12: "เสร็จตีสาม ยาวนานสุดๆ 5555",
    13: "ต่ออีกก",
    14: "ไปเที่ยวด้วยกัน ดีใจสุดๆ (แอบถ่ายคนขี้ร้อนมา)",
    15: "ได้รูปเงาคู่มาด้วยย",
    16: "ประกอบคอมให้ Gammer 🎮",
    17: "เริ่มต้นชีวิต Gammer",
    18: "🎮",
    19: "ไปกันต่ออ 55555",
    20: "แวะไปปั่นเรือเป็ดสีชมพู 🦆",
    21: "เล่นเกมส์เบื่อละไปเที่ยวดีกว่า",
    22: "ถึงแย้วว",
    23: "เที่ยวว",
    24: "ลุยนํ้ากันน",
    25: "หนาวมากก",
    26: "ตัวเล็กแต่เดินเร็ว",
    27: "หัดขับรถ เกร็งสุดๆ",
    28: "สอบข้อเขียนผ่านแล้วว",
    29: "ได้ใบขับขี่ เก่งมากก",
    30: "ได้ใบขับขี่แล้วก็มาซื้อรถคันแรก 55555",
    31: "ขอบคุณนะที่รักกันน ❤️",
    32: "ขอบคุณนะที่น่ารักกับเราตลอด",
    33: "วันนี้ปีที่แล้ว 14/Feb/2024",
    34: "รักแพรที่สุดดด"
};

function updateImage() {
    const imgElement = document.getElementById("slideshow");
    const imageTitle = document.getElementById("imageTitle"); // Image title
    const formattedNumber = currentImage.toString().padStart(2, '0'); 
    const newSrc = `${imagePath}img${formattedNumber}.jpeg?nocache=${Date.now()}`;

    console.log(`Updating image to: ${newSrc}`);

    imgElement.src = newSrc; // Change the image
    imageTitle.textContent = titles[currentImage] || `Photo ${currentImage} of ${totalImages}`; // Update image title
}

function createHeart() {
    const heart = document.createElement("img");
    heart.src = "heart.png";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    const size = Math.random() * 30 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = "-10vh";

    let fallDuration = Math.random() * 5 + 3;
    heart.style.animation = `fall ${fallDuration}s linear infinite`;

    setTimeout(() => {
        heart.remove();
    }, fallDuration * 1000);
}

setInterval(createHeart, 300);