import fetch from "node-fetch";
import open from "open";
import { createInput, createButton, createSpinner } from "@flowbite/components";

const { argv } = yargs(process.argv);

// Create search input
const searchInput = createInput({
  placeholder: "Enter topic...",
  id: "topicInput",
});

// Create search button
const searchButton = createButton({ text: "Search", onClick: handleSearch });

// Create refresh button
const refreshButton = createButton({ text: "Refresh", onClick: handleRefresh });

// Create loading spinner
const loadingSpinner = createSpinner();

// Append components to the document
document.body.appendChild(searchInput);
document.body.appendChild(searchButton);
document.body.appendChild(refreshButton);
document.body.appendChild(loadingSpinner);

async function handleSearch() {
  const topic = searchInput.value;
  showLoading(true);

  try {
    const res = await fetch(
      `https://www.reddit.com/search.json?q=${encodeURIComponent(topic)}`
    );
    const searchData = await res.json();
    const searchResults = searchData.data.children;

    // Process and display the search result (modify as needed)
    console.log("Search Result:", searchResults);
  } catch (error) {
    console.error("Error fetching Reddit search:", error);
  } finally {
    showLoading(false);
  }
}

function handleRefresh() {
  // Implement refresh logic here
  console.log("Refresh button clicked");
}

function showLoading(isLoading) {
  // Show/hide loading spinner based on the isLoading flag
  loadingSpinner.style.display = isLoading ? "block" : "none";
}
