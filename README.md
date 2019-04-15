# example-supertest
Example of API tests using Supertest.

Esse repositório tem como objetivo ser meu campo de treinamento e estudo de Supertest. (ad infinitum em construção... ).

Peguei a API `https://quartz-drain.glitch.me/` e desenvolvi a automação de um endpoint `products` testando os verbos/chamadas e o contrato.

# Pré-condições:
- Node instalado;
- npm instalado.

# Reprodução:

1 - Clonar projeto:
```
git clone https://github.com/marciovrl/example-supertest.git
```

2 - Executar comando node para instalar depedencias:
```
npm install
```

3 - Executar comandos de teste:
```
    npm run test-feature #Rodar testes nos endpoint e validar funcionamento de cada verbo.
    npm test-contract #Rodar testes de contrato.
    npm test #Rodar todos os testes.
```
# Estrutura do projeto

```
|
| - test
    | contracts
    | helper
    | schemas
    | steps
| - `.gitignore`
| - `package.json`  
| - `README.md`  
```