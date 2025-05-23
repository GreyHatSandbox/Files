// List of safe, well-known websites
const websites = [
  "https://www.wikipedia.org",
  "https://www.mozilla.org",
  "https://www.bbc.com",
  "https://www.nationalgeographic.com",
  "https://www.khanacademy.org",
  "https://www.howstuffworks.com",
  "https://www.space.com",
  "https://www.npr.org",
  "https://www.ted.com",
  "https://www.archive.org"
];

// Function to open a random website
function openRandomWebsite() {
  const randomIndex = Math.floor(Math.random() * websites.length);
  const url = websites[randomIndex];
  window.open(url, '_blank');
}

// Run every 3 seconds
const intervalId = setInterval(openRandomWebsite, 3000);

// To stop it later, you can call clearInterval(intervalId);
