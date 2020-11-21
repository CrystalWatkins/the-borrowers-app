import axios from "axios";

export function getOwnedBooks(id) {
  console.log(id);
  return axios.get(`/api/users/${id}`);
};
export function addOwnedBook(id) {
  console.log(id);
  return axios.put(`/api/users/added/${id}`, book);
  //may have to change to 3001 to avoid cors policy!!!
};
export function deleteOwnedBook(id) {
  console.log(id);
  return axios.delete(`/api/books/${id}`);
}
export  function requestToRent(id, user) {
  console.log(id);
  console.log(user);
  return axios.put(`/api/books/${id}`, { userId: user });
}
export  function getAllOwnedBooks() {
  // console.log("hello")
  return axios.get(`/api/books`);
}
export function bookRented(id, book) {
  console.log(id);
  console.log(book);
  return axios.put(`/api/users/rent/${id}`, { bookId: book });
}
export function bookAvailable(id, book) {
  console.log(id);
  console.log(book);
  return axios.put(`api/users/return/${id}`, { bookId: book });
}
export function bookReturn(id, bookId) {
  return axios.put(`api/books/${id}`, { bookId });
}
