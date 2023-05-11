# Define a imagem de base
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos do projeto
COPY . .

# Copia o arquivo .env do projeto
COPY ./.env .

# Copia o arquivo do projeto e instala as dependências
RUN npm install --force

# Define a porta a ser exposta
EXPOSE 5001
EXPOSE 6006

# Define o comando padrão a ser executado quando o contêiner for iniciado
CMD ["npm", "run", "dev"]
