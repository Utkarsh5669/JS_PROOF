Javascript NFT.js

License This contract is using the MIT License.

Prerequisites Solidity ^0.8.18

Contract Details Variable declaration: nfts: An empty array to store the minted NFTs. mintNFT function: This function takes three parameters: name, description, and place. It creates an NFT object using the provided parameters as metadata. The NFT object has properties name, description, and place. The NFT object is then pushed to the nfts array. A message is logged to the console indicating the successful minting of the NFT. listNFTs function: This function loops through each NFT in the nfts array. For each NFT, it logs the metadata (name, description, and place) to the console. getTotalSupply function: This function logs the total number of minted NFTs by accessing the length property of the nfts array. Minting NFTs and listing them: The code calls the mintNFT function three times with different parameters to mint three NFTs. After minting, the listNFTs function is called to print the metadata of all minted NFTs. Finally, the getTotalSupply function is called to print the total number of minted NFTs.

loom video walkthrough

https://www.loom.com/share/e5401dde6d3c4bd5a7ab365a3e698222?sid=dc783782-6b05-4d46-8cc2-58d6b68e3367
