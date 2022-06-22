  const $mouse = document.querySelector('body').addEventListener('mousemove', cursor)
  const $cursor = document.querySelector('#cursor')
  const $click = document.querySelector('body').addEventListener('click', click)
  const $ul = document.querySelectorAll('ul')

  function cursor (event) {
    $cursor.style.left = `${event.x + 5}px`
    $cursor.style.top = `${event.y - 5}px`
  }
  function click (event) {
if (event.target.tagName.toLowerCase() === 'li'){
    $ul[0].classList.add('drop')
    $ul[1].classList.add('drop2')
    $ul[0].setAttribute('disabled', 'disabled')
    $ul[1].setAttribute('disabled', 'disabled')
  }
}
