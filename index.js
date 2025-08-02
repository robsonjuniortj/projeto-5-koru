#!/usr/bin/env node
// ↑ Permite rodar o script direto no terminal

// Lê argumentos da linha de comando (o terceiro item é o primeiro argumento passado pelo usuário)
const cep = process.argv[2];

// Função para validar o formato do CEP
function validarCEP(cep) {
  const cepLimpo = cep.replace(/\D/g, ''); // Remove caracteres que não são números
  return /^[0-9]{8}$/.test(cepLimpo); // Verifica se tem exatamente 8 dígitos
}

// Função para buscar dados do CEP usando a API ViaCEP
async function buscarCEP(cep) {
  const cepLimpo = cep.replace(/\D/g, '');
  const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
  const data = await response.json();

  if (data.erro) {
    console.log("❌ CEP não encontrado!");
    return;
  }

  console.log(`📍 Resultado para CEP ${cepLimpo}:\n`);
  console.log(`🏙 Cidade: ${data.localidade}`);
  console.log(`🗺 Estado: ${data.uf}`);
  console.log(`🏘 Bairro: ${data.bairro || "Não informado"}`);
  console.log(`📬 Logradouro: ${data.logradouro || "Não informado"}`);
}

// Função principal
async function main() {
  if (!cep) {
    console.log("❌ Informe um CEP! Exemplo: node index.js 01001000");
    return;
  }

  if (!validarCEP(cep)) {
    console.log("❌ CEP inválido! Use o formato 12345678 ou 12345-678");
    return;
  }

  await buscarCEP(cep);
}

main();
