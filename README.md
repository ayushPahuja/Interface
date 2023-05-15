
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


