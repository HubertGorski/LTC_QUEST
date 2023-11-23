const maxStatusNumber: number = 2;

export function changeState(statusBtn: number) {
  if (statusBtn === maxStatusNumber) {
    statusBtn = 0;
  } else {
    statusBtn = statusBtn + 1;
  }
  return statusBtn;
}
