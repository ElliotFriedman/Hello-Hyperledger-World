/**
 * Sample transaction processor function.
 * @param {org.example.basic.SupplyChainTransaction} tx The sample transaction instance.
 * @transaction
 */
async function supplyChainTransaction(tx) {  // eslint-disable-line no-unused-vars

	// Update the asset with the new value.
	tx.goods.owner = tx.buyer;

	// Get the asset registry for the asset.
	const containerAssetRegistry = await getAssetRegistry('org.example.basic.Container');

	// Update the asset in the asset registry.
	await containerAssetRegistry.update(tx.goods);
}

/**
 * Sample transaction processor function.
 * @param {org.example.basic.HarvestFoodTransaction} tx The sample transaction instance.
 * @transaction
 */
async function harvestFoodTransaction(tx) {  // eslint-disable-line no-unused-vars

	// Update the asset with the new value.
	tx.goods.owner = tx.harvester.identity;

	// Get the asset registry for the asset.
	const containerAssetRegistry = await getAssetRegistry('org.example.basic.Container');

	// Update the asset in the asset registry.
	await containerAssetRegistry.update(tx.goods);
}
