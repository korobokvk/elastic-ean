const elasticsearch = require('elasticsearch');

const elasticClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'info'
});

elasticClient.cluster.health({}).then((data) => console.log(data.status)).catch(err => console.error(err));

(function indexExists() {
    elasticClient.indices.exists({
        index: 'users'
    }).then((data) => {
        data ? console.log('Index already exist') : createIndex();
    }).catch(err => console.log(err));
})();

async function createIndex(index) {
    await elasticClient.indices.create({
        index: index || 'users'
    }).then().catch(err => console.log(err));
}

async function addDocs(document, id) {
    return await elasticClient.index({
        index: 'users',
        type: 'usersInfo',
        id: id || null,
        body: {
            userName: document.userName,
            userSurname: document.userSurname,
            dateOfBirth: document.dateOfBirth,
            phone: document.phone,
            userEmail: document.userEmail,
            lastChanges: document.lastChanges
        }
    })
}
exports.addDocs = addDocs;

async function search() {
    return await elasticClient.search({
        index: 'users',
    })
}
exports.search = search;

async function searchById(id) {
  return await elasticClient.get({
    index: 'users',
    type: 'usersInfo',
    id: id
  })
}
exports.searchById = searchById;

async function deleteIndex(id) {
    await elasticClient.delete({
        index: 'users',
        type: 'usersInfo',
        id: id
    });
}
exports.deleteIndex = deleteIndex;




