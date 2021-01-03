import { createSelector } from "reselect";
const appSelector = (state) => state.app;

export const currentUserSelector = createSelector(
  appSelector,
  (app) => app.users.filter((u) => u.id === app.currentUserId)[0]
);

export const newReservationSelector = createSelector(
  appSelector,
  (app) => app.newReservation
);

export const formValidationSelector = createSelector(
  appSelector,
  (app) => app.formValidation
);
export const allUsers = createSelector(appSelector, (app) => app.users || []);

export const diseaseHistorySelector = createSelector(
  appSelector,
  (app) => app.diseaseHistory
);
export const confirmedReservationByIdSelector = createSelector(
  appSelector,
  (app) => app.reservations.filter((r) => r.userId === app.currentUserId)
);

export const customerReviewSelector = createSelector(
  appSelector,
  (app) => app.customerReview
);
