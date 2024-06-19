const { Op } = require('sequelize');

const { City } = require('../models/index');


class CityRepository{
    async createCity( {name} ) { // parameter will be an object like name:sunny ,{}this will get you sunnny isse use krke destructuring the object
        try{
            const city = await City.create({ name });
            return city;
        } catch (error){
            console.log("something went wrong in repository");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try{
            await City.destroy({
                    where: {
                        id: cityId
                    }
            });
        } catch (error){
            console.log("something went wrong in repository");
            throw {error};
        }
    }

    async updateCity(cityId , data) {
        try{
            // this commented also works but not returns updated oject it gives array 1
            //isliye new code yeh bhi acha hai but optimised code
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error){
            console.log("something went wrong in repository");
            throw {error};
        }
    }

    async getCity(cityId) {
        try{
            const city = await City.findByPk(cityId);
            return city;
        } catch (error){
            console.log("something went wrong in repository");
            throw {error};
        }
    }

    async getAllCities( filter ) {  //filter can be empty then fetch all cities 
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name : {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("something went wrong in repository");
            throw {error};
        }
    }
}

module.exports = CityRepository;