 function clickMenu() {
         const menu = document.getElementById('menu');

            if (menu.style.display == 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        }

        // Pega a esteira dos relatos
        const relatoTrack = document.getElementById('relatoTrack');

        // Pega todos os cards de relato que existem dentro dela
        const relatoCards = relatoTrack.querySelectorAll('.relato-card');

        // Pega o lugar onde as bolinhas vão ser criadas
        const relatoBolinhasContainer = document.getElementById('relatoBolinhas');

        // Guarda em qual relato estamos agora (começa no 0, o primeiro)
        let relatoIndexAtual = 0;

        // Cria uma bolinha pra cada relato
        relatoCards.forEach((card, index) => {

            const bolinha = document.createElement('button');
            bolinha.classList.add('bolinha');

            // Ao clicar na bolinha, pula direto pro relato dela
            bolinha.addEventListener('click', () => {
                relatoIndexAtual = index;
                atualizarRelatos();
            });

            relatoBolinhasContainer.appendChild(bolinha);
        });

        // Pega todas as bolinhas recém-criadas
        const relatoBolinhas = relatoBolinhasContainer.querySelectorAll('.bolinha');

        // Move a esteira até o relato certo, e destaca a bolinha ativa
        function atualizarRelatos() {

            const distancia = relatoIndexAtual * 640;
            relatoTrack.style.transform = `translateX(-${distancia}px)`;

            relatoBolinhas.forEach((bolinha, index) => {
                if (index === relatoIndexAtual) {
                    bolinha.classList.add('ativa');
                } else {
                    bolinha.classList.remove('ativa');
                }
            });
        }

        // Chama uma vez no carregamento da página, pra já marcar a primeira bolinha
        atualizarRelatos();
