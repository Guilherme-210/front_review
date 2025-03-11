// importação dos eventos
import { toggle_Theme, aplicarTemaSalvo } from "./event/toggleTheme.js"
import { calculate3 } from "./event/calculate.js"
import { clickNumber } from "./event/clickNumber.js"
import { clear } from "./event/clear.js"

import { keydownEvent } from "./event/keydown.js"
import { copy } from "./event/copy.js"

// troca de tema
document.getElementById("toggle_Theme").addEventListener("click", toggle_Theme)
document.addEventListener("DOMContentLoaded", aplicarTemaSalvo) // Executa automaticamente ao carregar a página
// Função de calcular
document.getElementById("equal").addEventListener("click", calculate3)
// Criação do evento de click dos botões da calculadora
document.querySelectorAll(".charKey").forEach(clickNumber)
// Cria o evento do botão clear com foco para digitar na calculadora
document.getElementById("clear").addEventListener("click", clear)


// funções a baixo ainda não estao funcionando
// criação do evento de keydown 'tecla precionada'
document.getElementById("input").forEach("keydown", keydownEvent)
// configuração do botão de copia
document.getElementById("copyToClipboard").addEventListener("click", copy)