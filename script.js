// Perguntas e respostas
const qaPairs = {
    "Como faço para enviar um pacote internacional?": ": Para enviar um pacote internacional, você precisa da documentação de envio, declaração aduaneira, e seguir as regras de peso e dimensões específicas para o destino. Deseja calcular as tarifas agora?",
    "Qual o prazo de entrega para o Sedex em determinado CEP?": "O prazo de entrega para o Sedex depende do CEP de destino. Informe o CEP e eu te direi o prazo estimado.",
    "Como rastrear um pacote para um cliente?": "Por favor, forneça o código de rastreamento. Vou buscar as informações de status do pacote para você.",
    "Quais são os serviços disponíveis para envios nacionais?": "Os principais serviços disponíveis para envios nacionais incluem Sedex, PAC, Carta Registrada e Logística Reversa. Posso explicar mais detalhes sobre cada um deles, se desejar.",
    "Como calcular o valor de envio para determinado destino?":"Informe o peso, dimensões e o CEP de destino, e eu calcularei o valor do envio para você.",
    "Como funciona o reembolso em caso de extravio ou atraso?":"Em caso de extravio ou atraso, o cliente pode solicitar um reembolso de acordo com a política dos Correios. O reembolso cobre o valor do serviço e, em alguns casos, o valor da mercadoria, se houver seguro.",
    "Quais são as regras para enviar mercadorias específicas, como líquidos ou alimentos?":"O envio de líquidos e alimentos segue regras específicas, incluindo embalagem adequada e limitações de peso e volume. Algumas mercadorias podem ter restrições para envio internacional.",
    "Como faço para emitir uma etiqueta de envio?":"Para emitir uma etiqueta de envio, acesse o sistema de emissão, preencha os dados do remetente e destinatário, e selecione o serviço de envio. Posso te guiar no preenchimento, se necessário.",
    "Posso consultar o status de treinamento ou certificação de um funcionário?":"Sim, posso acessar o sistema de certificação e te informar sobre os cursos concluídos. No entanto, lembre-se que com o uso do PostXperts, muitos cursos sobre procedimentos e normas podem ser simplificados, pois a IA facilita o acesso a essas informações em tempo real.",
};

function processarPergunta() {
    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');
    const loadingMessage = document.getElementById('loading-message');

    // Adiciona a pergunta do usuário ao chat
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = `Você: ${userInput}`;
    chatBox.appendChild(userMessage);

    // Exibe a mensagem de carregamento
    loadingMessage.style.display = 'block';
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simula um atraso na resposta da assistente
    setTimeout(() => {
        // Oculta a mensagem de carregamento
        loadingMessage.style.display = 'none';

        // Encontra a resposta
        const resposta = qaPairs[userInput] || "Desculpe, não sei a resposta para isso.";

        // Adiciona a resposta da assistente ao chat
        const assistantMessage = document.createElement('div');
        assistantMessage.className = 'chat-message assistant';
        assistantMessage.textContent = `Assistente: ${resposta}`;
        chatBox.appendChild(assistantMessage);

        // Limpa o input e rola para baixo
        document.getElementById('user-input').value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000); // Tempo de carregamento simulado de 1 segundo
}

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'flex';
    } else {
        chatContainer.style.display = 'none';
    }
}
