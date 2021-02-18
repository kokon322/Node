const fs = require('fs');
const path = require('path');

const path18_00 = path.join(__dirname, '18_00');
const path20_00 = path.join(__dirname, '20_00');
const pathAllStudents = path.join(process.cwd(), 'lesson1', 'allStudents');

fs.readdir(path18_00, (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(file => {
        fs.rename(path.join(path18_00, file), path.join(pathAllStudents, file), (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
});
fs.readdir(path20_00, ((err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(file => {
        fs.rename(path.join(path20_00, file), path.join(pathAllStudents, file), () => {
            if (err) {
                console.log(err);
                return;
            }
        });
    });
}));

