const { CityService, CityService } = require('../services/index');

const cityService = new CityService();


//it has POST method and req type is req.body
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'City created successfully',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to create city',
            err: error
        });
    }
}

//delete -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: 'City deleted successfully',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to delete city',
            err: error
        });
    }
}


//PATCH -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
            return res.status(200).json({
                data: city,
                success: true,
                message: 'City updated successfully',
                err: {}
            });            
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to update city',
            err: error
        });
    }
}


//GET -> /city/:id
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
            return res.status(200).json({
                data: reponse,
                success: true,
                message: 'City fetched successfully',
                err: {}
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to get city',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}