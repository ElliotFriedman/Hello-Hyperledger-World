# Hello-Hyperledger-World
Quick hyper ledger composer application to demonstrate supply chain and voting applications atop hyperledger composer

## Food Supply Chain
Defines 3 different types of network participants
- Farmers who are allowed to produce food
- Processors who are allowed to be middlemen between food suppliers and food retailers
- Food Retailers who are allowed to sell food to consumers

Defines 2 different types of transactions
- HarvestFoodTransaction defines the harvest event of a farm
- SupplyChainTransaction defines the transfer of food from one network participant to another

Defines 1 type of asset
- Container, which is a generic object that holds food types and amounts and can only be created by a farmer

This is a simple application that allows you to track food throughout the supply chain

## Voting
Defines 2 different types of network participants
- Voters who are allowed to cast votes
- Candidates who are allowed to recieve votes

Defines 1 type of transaction
- Vote, which contains reference to the candidate and the voter

Defines 1 type of asset
- Ballot, which contains reference to the candidate and the voter and holds a unqiue ballotID

This is a simple application that allows you to vote for a candidate
