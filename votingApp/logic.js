/* global getAssetRegistry getFactory emit query */

/**
 * Track the trade of a commodity from one trader to another
 * @param {vote.Vote} Vote - the trade to be processed
 * @transaction
 */
async function voteForPoliticianByBallot(Vote) { // eslint-disable-line no-unused-vars

	// check that the voter hasn't already voted
	if (Vote.voter.hasVoted == true)
		throw new Error("Already Voted");

	// get all Candidates
	const politicians = await getParticipantRegistry('vote.Candidate');
	const voters = await getParticipantRegistry('vote.Voter');

	// get the politician out of the database by their candidateID
	let politician = await politicians.get(Vote.politician.candidateID);
	// get the voter from the transaction object
	let voter = Vote.voter;

	politician.voteCount += 1;
	voter.hasVoted = true;

	// persist the state of the commodity
	await politicians.update(politician);
	await voters.update(voter);
}
