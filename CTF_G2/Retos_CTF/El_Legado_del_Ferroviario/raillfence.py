def rail_fence_encrypt(text, rails):
    # Eliminar espacios y convertir a mayúsculas para simplificar
    text = text.replace(" ", "").upper()
    
    # Crear las filas (rails) vacías
    fence = [[] for _ in range(rails)]
    
    # Dirección de movimiento: 1 para bajar, -1 para subir
    rail = 0
    direction = 1
    
    # Distribuir los caracteres en las filas
    for char in text:
        fence[rail].append(char)
        
        # Cambiar dirección si llegamos a la primera o última fila
        if rail == 0:
            direction = 1
        elif rail == rails - 1:
            direction = -1
            
        # Moverse a la siguiente fila
        rail += direction
    
    # Unir todos los caracteres de todas las filas
    result = ""
    for rail in fence:
        result += "".join(rail)
    
    return result

def rail_fence_decrypt(text, rails):
    # Crear las filas (rails) vacías
    fence = [[] for _ in range(rails)]
    
    # Calcular la longitud de cada fila
    rail_lengths = [0] * rails
    rail = 0
    direction = 1
    
    for _ in range(len(text)):
        rail_lengths[rail] += 1
        
        if rail == 0:
            direction = 1
        elif rail == rails - 1:
            direction = -1
            
        rail += direction
    
    # Distribuir los caracteres del texto cifrado en las filas
    index = 0
    for i in range(rails):
        fence[i] = list(text[index:index + rail_lengths[i]])
        index += rail_lengths[i]
    
    # Reconstruir el mensaje original
    result = ""
    rail = 0
    direction = 1
    
    for _ in range(len(text)):
        result += fence[rail].pop(0)
        
        if rail == 0:
            direction = 1
        elif rail == rails - 1:
            direction = -1
            
        rail += direction
    
    return result

# Ejemplo de uso
def main():
    print("Encriptación Rail Fence")
    print("-----------------------")
    
    # Solicitar entrada del usuario
    message = input("Ingresa el mensaje a encriptar: ")
    rails = int(input("Ingresa el número de filas (rails): "))
    
    # Encriptar el mensaje
    encrypted = rail_fence_encrypt(message, rails)
    print(f"\nMensaje encriptado: {encrypted}")
    
    # Desencriptar el mensaje
    decrypted = rail_fence_decrypt(encrypted, rails)
    print(f"Mensaje desencriptado: {decrypted}")
    
    # Visualización del Rail Fence
    print("\nVisualización del Rail Fence:")
    visualize_rail_fence(message.replace(" ", "").upper(), rails)

def visualize_rail_fence(text, rails):
    # Crear una matriz de puntos para visualizar
    fence = [[' ' for _ in range(len(text))] for _ in range(rails)]
    
    rail = 0
    direction = 1
    
    # Marcar las posiciones donde irán los caracteres
    for i in range(len(text)):
        fence[rail][i] = text[i]
        
        if rail == 0:
            direction = 1
        elif rail == rails - 1:
            direction = -1
            
        rail += direction
    
    # Imprimir la visualización
    for rail in fence:
        print(''.join(rail))

if __name__ == "__main__":
    main()
