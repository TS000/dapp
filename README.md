# Learning about dapps
You will need:
- Metamask
- Basic understanding about blockchains
- Knowledge about Ethereum wouldnt hurt

After pulling down the code, try running the following:

```shell
npx hardhat node
```
Grab the private key from "account 0" and import the account into your Metamask.  
Next, run the following:

```shell
npx hardhat run scripts/deploy.js --network localhost
yarn start
```

We aren't using any real coins in this project. Hardhat creates dummy eth for us to play with.
