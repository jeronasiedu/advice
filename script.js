const url = 'https://api.adviceslip.com/advice'
const adviceText = document.querySelector('.text')
const randomAdviceBtn = document.querySelector('.get-advice')
const spinnerContainer = document.querySelector('.spinner-container')
const adviceId = document.querySelector('.id')
async function getAdvice() {
  try {
    spinnerContainer.style.display = 'block'
    randomAdviceBtn.classList.add('glow')
    const response = await fetch(url)
    const { slip } = await response.json()
    adviceText.innerText = slip.advice
    adviceId.innerText = `Advice #${slip.id}`
    spinnerContainer.style.display = 'none'
    randomAdviceBtn.classList.remove('glow')
  } catch (error) {
    console.log(error.response)
    randomAdviceBtn.classList.remove('glow')
    spinnerContainer.style.display = 'none'
  }
}
getAdvice()
randomAdviceBtn.addEventListener('click', getAdvice)
