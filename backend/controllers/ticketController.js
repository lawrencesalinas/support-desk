const asyncHandler = require('express-async-handler')

const User = require('../model/userModel')
const Ticket = require('../model/ticketModel')

//---------------------------GET ALL USER TICKETS-------------------------------//
// @desc    Get user tickets
// @route   GET  /app/tickets
// @access  Private
const getTickets = asyncHandler(async (req, res) => {
  // Get user using  the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const tickets = await Ticket.find({ user: req.user.id })

  res.status(200).json(tickets)
})
//------------------------------------------------------------------------------//

//-----------------------------CREATE A TICKET----------------------------------//
//@desc     Create new ticket
// @route   POST  /app/tickets
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  const { product, description } = req.body

  if (!product || !description) {
    res.status(400)
    throw new Error('Please add a product and description')
  }

  // Get user using  the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.create({
    product,
    description,
    user: req.user.id,
    status: 'new',
  })

  res.status(201).json(ticket)
})
//------------------------------------------------------------------------------//

//------------------------------GET SINGLE TICKET----------------------------------//
// @desc    Get user tickets
// @route   GET  /app/tickets
// @access  Private
const getTicket = asyncHandler(async (req, res) => {
  // Get user using  the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  res.status(200).json(ticket)
})
//------------------------------------------------------------------------------//

//-------------------------------DELETE TICKET------------------------------------//
// @desc    Delete tickets
// @route   DELETE  /app/tickets/:id
// @access  Private
const deleteTicket = asyncHandler(async (req, res) => {
  // Get user using  the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  await ticket.remove()

  res.status(200).json({ success: true })
})
//------------------------------------------------------------------------------//

//------------------------------UPDATE TICKET----------------------------------//
// @desc    Update ticket
// @route   PUT  /app/tickets/:id
// @access  Private
const updateTicket = asyncHandler(async (req, res) => {
  // Get user using  the id in the JWT
  const user = await User.findById(req.user.id)

  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  const ticket = await Ticket.findById(req.params.id)

  if (!ticket) {
    res.status(404)
    throw new Error('Ticket not found')
  }

  if (ticket.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('Not Authorized')
  }

  const updatedTicket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedTicket)
})
//------------------------------------------------------------------------------//

module.exports = {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
}
