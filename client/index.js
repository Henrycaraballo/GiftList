const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  // Generating Random number to get a name from the Name list else an unknown name
  const name = Math.random() > 0.5 ? niceList[Math.floor(Math.random() * niceList.length)] : 'Unknown Name';

  // Pass a entire name list to create a Merkle Tree 
  const merkleTree = new MerkleTree(niceList);
  const index = niceList.findIndex(n => n === name);

  // Get the proof 
  const proof = merkleTree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof, Henry Caraballo
  });

  console.log({ gift });
}

main();