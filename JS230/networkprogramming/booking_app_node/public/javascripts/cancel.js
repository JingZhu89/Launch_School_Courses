function cancelBooking(bookingID) {
  let xhr = new XMLHttpRequest();
  xhr.open('PUT', `/api/bookings/${bookingID}`);
  xhr.send();
}

function cancelBooking(schedule_id) {
  let xhr = new XMLHttpRequest();
  xhr.open('DELETE', `/api/schedules/${schedule_id}`);
  xhr.send();
}