const asyncHandler = require('express-async-handler')

const User = require('../model/userModel')
const Ticket = require('../model/ticketModel')

// @desc    Get user tickets
// @route   GET  /app/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'get tickets' })
})

//@desc     Create new ticket
// @route   POST  /app/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'create tickets' })
})

module.exports = {
  getTickets,
  createTicket,
}
