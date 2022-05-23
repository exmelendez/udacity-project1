const toggleNav = () => {
  const headerLinks = document.getElementById("navLinks");
  if (headerLinks.style.display === "block") {
    headerLinks.style.display = "none";
  } else {
    headerLinks.style.display = "block";
  }
}