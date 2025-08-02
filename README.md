📍 CLI de Consulta de CEP

Um projeto simples em Node.js para consultar informações de endereço a partir de um CEP usando a API pública ViaCEP.

🚀 Funcionalidades

Consulta endereço pelo CEP.

Aceita CEP no formato 12345678 ou 12345-678.

Exibe cidade, estado, bairro e logradouro.

📦 Instalação

Clone o repositório:

git clone https://github.com/robsonjuniortj/projeto-5-koru.

cd projeto-5-koru

Instale as dependências (caso use commander ou outra biblioteca):

npm install

Dê permissão de execução ao script:

chmod +x index.js

Se quiser instalar como comando global:

npm link

🖥 Uso

Rodando direto pelo Node:

node index.js 01001000

Rodando como comando (se tiver feito npm link):

cep-cli 01001000

Exemplo de saída:

📍 Resultado para CEP 01001000:

🏙 Cidade: São Paulo
🗺 Estado: SP
🏘 Bairro: Sé
📬 Logradouro: Praça da Sé

🌐 API Utilizada

ViaCEP

📜 Licença

Este projeto é de uso livre para fins de estudo e aprendizado.

