// ================================
// Funcionalidades do Carrinho
// ================================
document.addEventListener("DOMContentLoaded", () => {
    const carrinhoTabela = document.querySelector("table tbody");
    const subtotalEl = document.querySelector(".resumo p strong");
    const finalizarBtn = document.querySelector(".finalizar");

    // Atualiza o subtotal
    function atualizarSubtotal() {
        let subtotal = 0;
        const linhas = carrinhoTabela.querySelectorAll("tr");
        linhas.forEach((linha) => {
            const quantidade = parseInt(
                linha.querySelector("input[type='number']").value
            );
            const preco = parseFloat(
                linha.querySelector("td:nth-child(3)").textContent.replace("R$ ", "").replace(",", ".")
            );
            const total = quantidade * preco;
            linha.querySelector("td:nth-child(4)").textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
            subtotal += total;
        });
        subtotalEl.textContent = `Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}`;
    }

    // Remove um item do carrinho
    carrinhoTabela?.addEventListener("click", (e) => {
        if (e.target.classList.contains("remover")) {
            e.target.closest("tr").remove();
            atualizarSubtotal();
        }
    });

    // Atualiza o subtotal ao alterar quantidade
    carrinhoTabela?.addEventListener("input", (e) => {
        if (e.target.type === "number") {
            atualizarSubtotal();
        }
    });

    // Finalizar compra (apenas simulação)
    finalizarBtn?.addEventListener("click", () => {
        alert("Compra finalizada com sucesso!");
        carrinhoTabela.innerHTML = ""; // Limpa o carrinho
        atualizarSubtotal(); // Atualiza o subtotal
    });
});

// ================================
// Formulário de Contato
// ================================
document.addEventListener("DOMContentLoaded", () => {
    const contatoForm = document.querySelector(".formulario form");
    if (contatoForm) {
        contatoForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita o envio padrão do formulário
            alert("Obrigado por entrar em contato! Responderemos em breve.");
            contatoForm.reset(); // Reseta o formulário
        });
    }
});

// ================================
// Página Inicial
// ================================
document.addEventListener("DOMContentLoaded", () => {
    const produtosEmDestaque = document.querySelectorAll(".produto button");
    produtosEmDestaque.forEach((botao) => {
        botao.addEventListener("click", () => {
            alert("Produto adicionado ao carrinho!");
        });
    });
});

// ================================
// Página de Produtos
// ================================
document.addEventListener("DOMContentLoaded", () => {
    const produtos = document.querySelectorAll(".produto");
    produtos.forEach((produto) => {
        const botao = produto.querySelector("button");
        botao.addEventListener("click", () => {
            alert(`Você adicionou "${produto.querySelector("p").textContent}" ao carrinho!`);
        });
    });
});

// ================================
// Página Quem Somos
// ================================
document.addEventListener("DOMContentLoaded", () => {
    const equipeSection = document.querySelector(".quem-somos");
    if (equipeSection) {
        equipeSection.addEventListener("mouseover", () => {
            equipeSection.style.backgroundColor = "#f0f8ff";
        });
        equipeSection.addEventListener("mouseout", () => {
            equipeSection.style.backgroundColor = "";
        });
    }
});

// ================================
// Funcionalidade do Slideshow
// ================================
let currentIndex = 0; // Índice do slide atual
const slides = document.querySelectorAll('.slide'); // Seleciona todos os slides
const totalSlides = slides.length; // Total de slides
const radioButtons = document.querySelectorAll('input[name="radio-btn"]'); // Seleciona os botões de rádio

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    const offset = index * -100; // Calcula o deslocamento negativo
    slidesContainer.style.transform = `translateX(${offset}%)`; // Aplica a transformação
    currentIndex = index; // Atualiza o índice atual
}

// Função para mudar para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Incrementa o índice
    showSlide(currentIndex); // Mostra o próximo slide
}

// Função para mudar para o slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Decrementa o índice
    showSlide(currentIndex); // Mostra o slide anterior
}

// Muda de slide a cada 12 segundos
setInterval(nextSlide, 12000);

// Adiciona evento de clique aos botões de rádio
radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener('click', () => {
        showSlide(index); // Mostra o slide correspondente ao botão de rádio clicado
    });
});
