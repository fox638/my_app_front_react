import { createEvent, createStore } from "effector";

// region Ports
export const formSubmit = createEvent();
export const emailChanged = createEvent<string>();
export const passwordChanged = createEvent<string>();
export const pageOpen = createEvent();
export const $email = createStore("");
export const $emailError = createStore<Nullable<ErrorType>>("");
export const $password = createStore("");
export const $passwordError = createStore<Nullable<ErrorType>>("");
export const $formDisabled = createStore(false);
export const $formPending = createStore(false);
// endregion
