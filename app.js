//Audio Contract
 const contractAddress_audio = "";
 const ContractAbi_audio = [];

//VideoContract
//Hello
 const contractAddress_Video ="";//Your Contract Address

 const ContractAbi_Video = [];

//ImageContract
 const contractAddress_Image = "";//Your Contract Address
 const ContractAbi_Image = [];

//Giff
 const contractAddress_Giff = "";//Your Contract Address
const ContractAbi_Giff = [];//YOur ABI
//dfasfa
//adsjhfhfbvgoyufvgkjvcnbpiauvg
const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();

const Audio = async () => {
    var _to_address = document.getElementById("Address_of_reviever").value;
    const _amount = document.getElementById("MintCount").value;
    // console.log(_to_address, _amount);

    const AudioContract = new ethers.Contract(contractAddress_audio, ContractAbi_audio, signer);
    try {
        
        await AudioContract.mint(_to_address, _amount)
        .then(tx => {
            
            console.log("Transaction Initiated", tx.hash);
        })

        .catch(err => {
            console.log("Error", err);
        });
        
    } catch (err) { console.log("Error", err) }

}


const Video = async () => {
    var _to_address = document.getElementById("Address_of_reviever").value;
    const _amount = document.getElementById("MintCount").value;
    // console.log(_to_address, _amount);

    const VideoContract = new ethers.Contract(contractAddress_Video, ContractAbi_Video, signer);
    try {
        
        await VideoContract.mint(_to_address, _amount)
        .then(tx => {
            
            console.log("Transaction Initiated", tx.hash);
        })

        .catch(err => {
            console.log("Error", err);
        });
        
    } catch (err) { console.log("Error", err) }

}


const Image = async () => {
    var _to_address = document.getElementById("Address_of_reviever").value;
    const _amount = document.getElementById("MintCount").value;
    // console.log(_to_address, _amount);

    const ImageContract = new ethers.Contract(contractAddress_Image, ContractAbi_Image, signer);
    try {
        
        await ImageContract.mint(_to_address, _amount)
        .then(tx => {
            
            console.log("Transaction Initiated", tx.hash);
        })
        
        .catch(err => {
            console.log("Error", err);
        });
        
    } catch (err) { console.log("Error", err) }

}


const Giff = async () => {
    var _to_address = document.getElementById("Address_of_reviever").value;
    const _amount = document.getElementById("MintCount").value;
    // console.log(_to_address, _amount);

    const GiffContract = new ethers.Contract(contractAddress_Giff, ContractAbi_Giff, signer);
    try {
        
        await GiffContract.mint(_to_address, _amount)
        .then(tx => {
            
            console.log("Transaction Initiated", tx.hash);
        })

        .catch(err => {
            console.log("Error", err);
        });
        
    } catch (err) { console.log("Error", err) }

}





