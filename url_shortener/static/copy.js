function myFunction() {
  /* Get the text field */
  let copyText = document.getElementById("myInput");


   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.textContent);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.textContent);
}
