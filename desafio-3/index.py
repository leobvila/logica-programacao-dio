class Heros:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo
    
    def atacar(self):
        ataque = ""
        if self.tipo == "guerreiro":
            ataque ="espada !"
        elif self.tipo == "mago":
            ataque = "magia !"
        elif self.tipo == "monge":
            ataque = "artes marciais !"
        elif self.tipo == "ninja":
            ataque = "shuriken !"
        else :
            ataque = "nada !!!"
        print(f"O {self.tipo} atacou usando {ataque}")

nome = input("Qual seu nome ? >")
idade = input("Qual sua idade? >")

# def escolha_tipo():
#     print("[1.] guerreiro")
#     print("[2.] mago")
#     print("[3.] monge")
#     print("[4.] ninja")
#     int(input("Escolha sua classe ? >"))

#     return 
#     while True :
#         opcao = escolha_tipo()
#         if opcao == 1 :
#             return "guerreiro"
#             break
#         elif opcao == 2 :
#             return "mago"
#             break
#         elif opcao == 3 :
#             return "monge"
#             break
#         elif opcao == 4 :
#             return "ninja"
#             break
#         else :
#             print("Opção invalida . Esclha movamente")

def escolha_tipo():
    while True:
        print("[1.] guerreiro")
        print("[2.] mago")
        print("[3.] monge")
        print("[4.] ninja")
        opcao = int(input("Escolha sua classe? > "))
        if opcao == 1:
            return "guerreiro"
        elif opcao == 2:
            return "mago"
        elif opcao == 3:
            return "monge"
        elif opcao == 4:
            return "ninja"
        else:
            print("Opção inválida. Escolha novamente.")




hero = Heros(nome, idade, escolha_tipo())

hero.atacar()