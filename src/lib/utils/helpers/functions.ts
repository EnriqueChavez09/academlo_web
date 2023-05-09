export const redirectToStep = (step: number) => {
  if (step === 1) {
    window.location.href = '/application/steps'
  }
  if (step === 2) {
    window.location.href = '/application/steps/upload'
  }
  if (step === 3) {
    window.location.href = '/application/steps/checkout'
  }
}
