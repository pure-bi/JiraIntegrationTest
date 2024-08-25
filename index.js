exports.handler = async (event, context) => {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
        body: 'Hello World\n',
    };
    return response;
}, 
exports.sum = (a, b) => { return a + b+1; }   