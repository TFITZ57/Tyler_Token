async function main() {
  // Get contract to deploy
  const Tyler_Token = await hre.ethers.getContractFactory("Tyler_Token");
  const Tyler_Token = await Tyler_Token.deploy();
  
  // Wait for the contract to be deployed
  await contract.deployed();

  console.log("Tyler_Token deployed to:", Tyler_Token.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
