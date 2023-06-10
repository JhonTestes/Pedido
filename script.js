simBtn.addEventListener('mouseover', () => {
    img.style.backgroundImage = "url('https://uniquebox.vteximg.com.br/arquivos/ids/158485/pedido-de-namoro_right.png?v=636936274608270000')"
});
simBtn.addEventListener('mouseout', () => {
    img.style.backgroundImage = "url('https://uniquebox.vteximg.com.br/arquivos/ids/158482/pedido-de-namoro_front.png?v=636936274247270000')"
});
naoBtn.addEventListener('mouseover', () => {
    naoBtn.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    naoBtn.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
});
