// Create a variable to hold a number of NFTs
// Creating an array to store the minted NFTs
const nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, place) {
  const nft = {
    name: name,
    description: description,
    place: place
  };
  nfts.push(nft);
  console.log("minted : "+name);
}

// Creating a "loop" that will go through the "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Description: " + nfts[i].description);
    console.log("place: " + nfts[i].place);
    console.log("---------------------------");
  }
}

// Print the total number of NFTs 
function getTotalSupply() {
    console.log("Total supply is: " + nfts.length);
  }

// Mint some NFTs
mintNFT("Utkarsh", "Engineer", "Chandigarh");
mintNFT("Sarthak", "Engineer", "Lucknow");
mintNFT("Rishabh", "Merchant Navy", "USA");

// List all NFTs
listNFTs();
getTotalSupply()