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

Then go into the UI of the React app and open a debug console.
After clicking the button "Fetch Greeting" you should see a message in the console.
Try updating the message by adding new text to the input field and clicking the button "Set Greeting"

We aren't using any real coins in this project. Hardhat creates dummy eth for us to play with.
Inspired by this video by Nader Dabit https://www.youtube.com/watch?v=a0osIaAOFSE&t=1433s
