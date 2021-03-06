const { Models: { User } } = require('../../dataBase');

const userQueryBuilders = async (limit, page, filters) => {
    const skip = (page - 1) * limit;

    const keys = Object.keys(filters);
    const filterObject = {};

    keys.forEach(key => {
        switch (key) {
            case 'ageGte':
                filterObject.age = { ...filterObject.age, $gte: filters.ageGte };
                break;
            case 'ageLte':
                filterObject.age = { ...filterObject.age, $lte: filters.ageLte };
                break;
            case 'name':
                filterObject.name = { $regex: filters.name, $options: 'i' };
                break;
            case 'email':
                filterObject.email = { $regex: filters.email, $options: 'i' };
                break;
            default:
                filterObject[key] = filters[key];
        }
    });

    const count = await User.countDocuments(filterObject);
    const users = await User.find(filterObject).limit(limit).skip(skip);

    return {
        data: users, page, limit, count, pages: Math.ceil(count / limit)
    };
};

module.exports = {
    userQueryBuilders
};
