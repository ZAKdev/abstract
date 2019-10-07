import * as Abstract from 'abstract-sdk';

const abstract = new Abstract.Client({
    accessToken: '46a9a1d0c8e5cecb7f402b9523d965461f34ab8b6064c9ede62b365938f7ef8c',
    //transportMode: "api",
});

export default post => {
    post('/api/getProjects', (req, res) => {
        console.log('coming to this route');
        abstract.projects.list({
            organizationId: 'eb54ea79-ac33-41e8-ada5-5ca3729e12e0'
        })
            .then(res => console.log(res));
    });
}