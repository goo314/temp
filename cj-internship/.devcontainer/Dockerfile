FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:20-bullseye
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-aarch64.zip" -o "awscli.zip" \
    && unzip awscli.zip \
    && ./aws/install \
    && rm -rf aws awscli.zip