def rail_fence_decrypt(ciphertext, rails=8):
    # Crear la matriz de rieles
    fence = [[] for _ in range(rails)]
    
    # Determinar el patrón de los rieles
    rail_pattern = []
    rail = 0
    direction = 1
    
    for i in range(len(ciphertext)):
        rail_pattern.append(rail)
        rail += direction
        if rail == 0 or rail == rails - 1:
            direction = -direction
    
    # Calcular cuántos caracteres van en cada riel
    rail_sizes = [0] * rails
    for pos in rail_pattern:
        rail_sizes[pos] += 1
    
    # Distribuir los caracteres del texto cifrado en los rieles
    index = 0
    for i in range(rails):
        fence[i] = list(ciphertext[index:index + rail_sizes[i]])
        index += rail_sizes[i]
    
    # Reconstruir el mensaje original siguiendo el patrón
    result = []
    for pos in rail_pattern:
        result.append(fence[pos].pop(0))
    
    return ''.join(result)

# Ejemplo de uso
ciphertext = "BEORUMTDNCUSORODSZCLOHEEAAIDCLLNEKIOOENLEISIECR"
plaintext = rail_fence_decrypt(ciphertext, 8)
print(plaintext)
