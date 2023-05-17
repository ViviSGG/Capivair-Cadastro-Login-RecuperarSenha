#pip install requests
import requests #pacote

print('Github Users')

username = input('Qual é o email do usuário? ')

url = f'https://vivisgg.pythonanywhere.com/buscar/{username}'

response = requests.get(url)# get - para extrair recursos de uma api
data = response.json() #convertendo pra json

if response.status_code == 200: 
    print(data) #puxar todos os campos 
    #print(f'Email da Empresa: {data["senha"]}') #puxar um campo específico do banco
else: #se der algum erro
    print('Não foi possível encontrar o usuário!')
    