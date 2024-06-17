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
            const city = await City.update(data, {
                where: {
                    id: cityId
                }
            });
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
}

module.exports = CityRepository;