import random

def jogar():
    print("*********************************")
    print("Bem vindo ao jogo de Adivinhação!")
    print("*********************************")
    print()

    print("Regras: Você inicia o jogo com 1000 pontos. A cada chute errado você perde o valor da distância entre o "
          "chute e o número secreto.")
    print("Quanto mais distante for o chute, mais pontos você irá perder. Exemplo: se o número secreto for 40, e você "
          "chutar 20, perderá 20 pontos.")
    print()

    numero_secreto = random.randrange(1, 101)
    total_de_tentativas = 0
    pontos = 1000

    print("Escolha o nível de dificuldade.")
    print("(1)Fácil (2)Médio (3)Difícil")

    nivel = int(input("Qual o nível desejado?"))

    if nivel == 1:
        total_de_tentativas = 10
    elif nivel == 2:
        total_de_tentativas = 7
    else:
        total_de_tentativas = 4

    for rodada in range(1, total_de_tentativas + 1):
        print("Tentativa {} de {}".format(rodada, total_de_tentativas))

        chute_str = input("Digite um número entre 1 e 100: ")
        print("Você digitou ", chute_str)
        chute = int(chute_str)

        if chute < 1 or chute > 100:
            print("Você deve digitar um número entre 1 e 100!")
            continue

        acertou = chute == numero_secreto
        maior = chute > numero_secreto
        menor = chute < numero_secreto
        perdeu = rodada == total_de_tentativas

        if acertou:
            print()
            print("****************************************")
            print("Você acertou e terminou com {} pontos!".format(pontos))
            print("****************************************")
            break
        if perdeu:
            print()
            print("****************************************")
            print("Você perdeu e terminou com {} pontos!".format(pontos))
            print("****************************************")
            print("O número secreto era {}!".format(numero_secreto))
        else:
            if maior:
                print("Você errou! O seu chute foi maior que o número secreto.")
            elif menor:
                print("Você errou! O seu chute foi menor que o número secreto.")
            pontos_perdidos = abs(numero_secreto - chute)
            pontos -= pontos_perdidos

    print("Fim do jogo!")


if __name__ == "__main__":
    jogar()
