const form = document.querySelector(".handleSubmit")
const fname = document.querySelector("#first-name")
const lname = document.querySelector("#last-name")
const email = document.querySelector("#email")
const msg = document.querySelector("#phone")

function handleSubmit(e) {
    e.preventDefault()
    firstName = fname.value
    lastName = lname.value
    emailName = email.value
    phoneNumber = phone.value

    form.reset();
    Swal.fire(
        'Good job!',
        'You Have Registered Successfully!!!',
        'success'
    )
}

form.addEventListener('submit', handleSubmit)

function doSomeThing() {
    console.log("hello world")
}

setTimeout(doSomeThing, 2000)
