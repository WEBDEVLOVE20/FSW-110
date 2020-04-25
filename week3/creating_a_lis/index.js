const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];



for (let i = 0; i < names.length; i++) {
   const head = document.createElement("h1")
   head.textContent = names[i]
   head.style.color = "teal"
   head.style.textAlign = "center"
   head.style.border = "dotted"
   head.style.borderColor = "black"
   document.body.append(head)
};