const url = 'https://api.adviceslip.com/advice'
const adviceText = document.querySelector('.text')
const randomAdviceBtn = document.querySelector('.get-advice')
const spinnerContainer = document.querySelector('.spinner-container')
const adviceId = document.querySelector('.id')
async function getAdvice() {
  try {
    spinnerContainer.style.display = 'block'
    const response = await fetch(url)
    const { slip } = await response.json()
    adviceText.innerText = slip.advice
    adviceId.innerText = `Advice #${slip.id}`
    spinnerContainer.style.display = 'none'
  } catch (error) {
    console.log(error.response)
    spinnerContainer.style.display = 'none'
  }
}
getAdvice()
randomAdviceBtn.addEventListener('click', getAdvice)
