
# Polygon Testing Interface

## Tools needed
NPM \
ethers.js\
Remix Ide for smart contracts(No installation needed as its an online tool)\
Metamask





## Documentation Contract Deployent

[Notion Doc for Smart Contract](https://indigg.notion.site/The-NFT-doc-aeb32347ad0a4bb8a59577b1d1074c3d)\
[Metamask Installation](https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask)


## Deployment

To deploy this project \
Download the dependencies 

```bash
  npm install
```

Then add Contract Addresses and Abi's to the app.js File.
The contract should be deployed By your address only so that you can mint the NFTS.

## Start the local server


### Change the name and Symbol of the NFT'S in the contract constructor.

 After Compiling the contract in the Remixe IDE click on the copy ABI button and add paste it to the respective abi in app.js.
 Similarly after deploying the contract copy the contract address and paste it in the app.js.

### Preferred IPFS SERVICE IS Pinata
MetaHashes are provided in the Notion-Doc.
Add the Hash in the contract code(change SetBaseURI in the constructor).
in the following Format.
ipfs://YOUR-HASH/

#### Note: There are only five nfts that you can mint as we only have 5 in the resources.

### Steps to DEPLOY and test THE Interface
Step:1 Clone this repository\
Step:2 Upload the resources to your Pinata IPFS services, Upload the metadata folders and the media folders.\
Step:3 Copy the hash of the metadata folders uploaded as they will bwe used to locate and mint the nfts\
Step:4 Now navigate to the Remixe Ide in the browser and paste the contract provided in this repository\
Step:5 Compile the contract --Refer to the Notion Doc Porvided above.\
Step6 Modify the constructor function with the Name Symbol and ipfs base URI \
Step:7 Copy the Abi for the contract\
![Screenshot 2023-05-16 100424](https://github.com/ayushPahuja/Interface/assets/129736136/06e68009-7b8d-45d1-9836-383424711fe9)  \
Step:7 Deploy it with the MetaMask injected option on Mumbai TESTNET\
Step:8 Copy the contract address from the deployed option\
Step:9 Navigate to app.js file in the repository and Paste the contract abi and address to the respective constants\
Step :10 Run the Live Server\
Step:11 Connect the wallet and mint the NFT's

