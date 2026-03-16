function preview() {
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;

    const content = `
        <html>
        <head>
        <style>${css}</style>
        </head>
        <body>
        ${html}
        </body>
        </html>
    `;

    document.getElementById("output").srcdoc = content;
}
html.addEventListener("input", preview);
css.addEventListener("input", preview);