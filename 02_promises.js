function processStep1() {
    return new Promise((resolve, reject) => {
        resolve('success');
    });
}

function processStep2(data) {
    return {}
}

function errorHandler(error) {
    return error;
}

processStep1()
    .then(data1 => processStep2(data1))
    .then(data2 => processStep2(data2))
    .then(data3 => processStep2(data3))
    .catch(errorHandler)
