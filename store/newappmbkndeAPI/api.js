import axios from "axios"
const newappmbkndeAPI = axios.create({
  baseURL: "https://new-app-mb-kn-2-de-136168.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return newappmbkndeAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return newappmbkndeAPI.post(`/api/v1/login/`, payload)
}
function api_v1_screen_list(payload) {
  return newappmbkndeAPI.get(`/api/v1/screen/`)
}
function api_v1_screen_create(payload) {
  return newappmbkndeAPI.post(`/api/v1/screen/`, payload)
}
function api_v1_screen_retrieve(payload) {
  return newappmbkndeAPI.get(`/api/v1/screen/${payload.id}/`)
}
function api_v1_screen_update(payload) {
  return newappmbkndeAPI.put(`/api/v1/screen/${payload.id}/`, payload)
}
function api_v1_screen_partial_update(payload) {
  return newappmbkndeAPI.patch(`/api/v1/screen/${payload.id}/`, payload)
}
function api_v1_screen_destroy(payload) {
  return newappmbkndeAPI.delete(`/api/v1/screen/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return newappmbkndeAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return newappmbkndeAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return newappmbkndeAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return newappmbkndeAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return newappmbkndeAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return newappmbkndeAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return newappmbkndeAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return newappmbkndeAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return newappmbkndeAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return newappmbkndeAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return newappmbkndeAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return newappmbkndeAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_screen_list,
  api_v1_screen_create,
  api_v1_screen_retrieve,
  api_v1_screen_update,
  api_v1_screen_partial_update,
  api_v1_screen_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
