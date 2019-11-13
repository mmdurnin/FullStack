import * as ReservationAPIUtil from '../util/reservation_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
})

const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

const removeReservation = (reservationId) => ({
    type: REMOVE_RESERVATION,
    reservationId
})

export const fetchReservation = (reservationId) => dispatch => {
    return ReservationAPIUtil.fetchReservation(reservationId)
        .then((reservation) => dispatch(receiveReservation(reservation)))
        // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const fetchReservations = () => dispatch => {
    return ReservationAPIUtil.fetchReservations()
        .then((reservations) => dispatch(receiveReservations(reservations)))
}

export const createReservation = (reservation) => dispatch => {
    return ReservationAPIUtil.createReservation(reservation)
        .then((reservation) => dispatch(receiveReservation(reservation)))
        // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const updateReservation = (reservation) => dispatch => {
    return ReservationAPIUtil.updateReservation(reservation)
        .then((reservation) => dispatch(receiveReservation(reservation)))
        // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const deleteReservation = (reservationId) => dispatch => {
    return ReservationAPIUtil.deleteReservation(reservationId)
        .then((reservationId) => dispatch(removeReservation(reservationId)))
        // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}