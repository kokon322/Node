const fs = require('fs');
const path = require('path');

const path18_00 = path.join(__dirname, '18_00');
const path20_00 = path.join(__dirname, '20_00');

fs.readdir(path18_00, ((err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(file => {
        fs.readFile(path.join(path18_00, file), ((err1, data) => {
            if (err) {
                console.log(err);
                return;
            }
            const user = JSON.parse(data);
            if (user.gender === 'male') {
                fs.rename(path.join(path18_00, file), path.join(path20_00, file), (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                });
            }
        }));
    });
}));

fs.readdir(path20_00, ((err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(file => {
        fs.readFile(path.join(path20_00, file), ((err1, data) => {
            if (err) {
                console.log(err);
                return;
            }
            const user = JSON.parse(data);
            if (user.gender === 'female') {
                fs.rename(path.join(path20_00, file), path.join(path18_00, file), (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                });
            }
        }));
    });
}));