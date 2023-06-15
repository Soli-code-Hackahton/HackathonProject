const services = require("../models/services");
const sendEmail = require("../notify/email");
const sendSms = require("../notify/sms");

// Create a new service
exports.createService = async (req, res) => {
  try {
    const { description, quantity, category } = req.body;

    // Create a new service document
    const newService = new services({
      description,
      quantity,
      category,
    });

    // Save the service to the database
    const savedService = await newService.save();

    sendSms("anas.zenagui@etu.uae.ac.ma", "Hello Anas, Hackathon!");

    res.status(201).json(savedService);
  } catch (error) {
    res.status(500).json({ error: "Failed to create the service" });
  }
};

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await services.find();

    res.json(services);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve services" });
  }
};

// Get a single service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await services.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the service" });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  try {
    const { description, quantity, category, agencyId } = req.body;

    const updatedService = await services.findByIdAndUpdate(
      req.params.id,
      { description, quantity, category, agencyId },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ error: "Failed to update the service" });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  try {
    const deletedService = await services.findByIdAndRemove(req.params.id);

    if (!deletedService) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(deletedService);
  } catch (error) {
    res.status(500).json({ error: "Failed to delete the service" });
  }
};
