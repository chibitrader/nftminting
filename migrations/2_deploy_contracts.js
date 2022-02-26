const NFT = artifacts.require("NFT")

module.exports = async function (deployer) {
    const IPFS_IMAGE_METADATA_URI = `ipfs/QmWnfjRMLKDRWYX75R5XgiChdyrpjDcEnCpS6AR9GLRwRq/`

    await deployer.deploy(
        NFT,
        "Abstract landscapes",
        "PAINT",
        IPFS_IMAGE_METADATA_URI
    )
}