const main = async () => {
    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();
    await transactions.deployed();
    console.log("Transactions deployed to:", greeter.address);
}

const runMain = async () => {
    try {
      await main();
      Process.exit(0);
    } catch(error){
      console.error(error);
      Process.exit(1);
    }
};

runMain();
    
