function downloadFile(fileName) {
  // Check if file name is provided
  if (!fileName) {
    console.error("Please provide a file name to download.");
    return;
  }

  const url = fileName; // Assuming the file is on the same server and accessible

  // Create an anchor element (a tag)
  const link = document.createElement("a");

  // Set the href attribute to the file URL
  link.href = url;

  // Set the download attribute to specify the downloaded file name
  link.download = fileName;

  // Simulate a click on the anchor element to trigger download
  link.click();
}
