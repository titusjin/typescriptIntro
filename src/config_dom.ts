const btn = document.querySelector("button");

// ? operator is automaticllay added by typescript. !!! amazing
// if I open the config: "strictNullChecks" to false then the operator should be dismissed.
btn?.addEventListener("click", () => {
  console.log("clicked");
});
