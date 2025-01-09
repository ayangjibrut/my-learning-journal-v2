document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#site-header")

    const intercept = document.createElement("div")
    intercept.dataset.observerIntercept = ""
    header.before(intercept)

    const headerObserver = new IntersectionObserver(([entry]) => {
        header.classList.toggle("active", !entry.isIntersecting)
    })
    headerObserver.observe(intercept)
})