let a = 0

function mouseOver(){
  const name = document.forms['suForm']['name'].value
  const email = document.forms['suForm']['email'].value
  const password = document.forms['suForm']['password'].value
  const check = document.querySelector('#check')

  const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if((name == "" || !email.match(emailCheck) || password == "" || check.checked == false) && a==0){
    buttonMoveLeft()
    a=1
    return false
  }

  if((name == "" || !email.match(emailCheck) || password == "" || check.checked == false) && a==1){
    buttonMoveRight()
    a=2
    return false
  }

  if((name == "" || !email.match(emailCheck) || password == "" || check.checked == false) && a==2){
    buttonMoveLeft()
    a=1
    return false
  }

  else{
    const btn = document.getElementById('submit-btn')
    document.getElementById('submit-btn').style.cursor = 'pointer';
    btn.style.backgroundColor = '#125619'
    return false
  }
}

function buttonMoveLeft(){
  const btn = document.getElementById('submit-btn')
  btn.style.transform = 'translate(-200%)'
}

function buttonMoveRight(){
  const btn = document.getElementById('submit-btn')
  btn.style.transform = 'translate(0%)'
}

function resetBtn(){
  const btn = document.getElementById('submit-btn')
  btn.style.transform = 'translate(0%)'
}