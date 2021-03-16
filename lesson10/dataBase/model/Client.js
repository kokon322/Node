module.exports = (client, DataTypes) => {
    const Client = client.define('Client',
        {
            idClient: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            FirstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            LastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Education: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Passport: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            City: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Age: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Department_idDepartment: {
                type: DataTypes.INTEGER,
                foreignKey: true,
            },

        },
        {
            tableName: 'client',
            timestamps: false
        });

    return Client;
};
