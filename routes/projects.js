import * as Abstract from 'abstract-sdk';

const abstract = new Abstract.Client({
    accessToken: '46a9a1d0c8e5cecb7f402b9523d965461f34ab8b6064c9ede62b365938f7ef8c',
});

export const getAssetsList = async(req, res) => {
    try {
        const response = await abstract.assets.list({
            branchId: 'master',
            projectId: '153a8c50-18d5-11e9-94df-473a1e58edc8',
            sha: 'latest', // or sha: "latest"
        });
        const { url } = response.find(item => item.layerName === req.query.layerName);
        res.status(200).json(url);
    } catch(err) {
        res.status(500).json(err);
    }
};
