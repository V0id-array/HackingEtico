ciphertext = input("Introduce el mensaje cifrado: ")
key = input("Introduce la clave para descifrarlo: ")

def vigenere_decrypt(ciphertext, key):
    plaintext = ""
    key_index = 0
    key_length = len(key)
    
    for char in ciphertext:
        # Si el carácter es una letra minúscula, se descifra; en otro caso, se deja igual.
        if char.isalpha() and char.islower():
            # Conversión: 'a' = 0, 'b' = 1, ..., 'z' = 25
            c_index = ord(char) - ord('a')
            k_index = ord(key[key_index % key_length]) - ord('a')
            # Aplicar la fórmula del descifrado Vigenère
            p_index = (c_index - k_index) % 26
            plaintext += chr(p_index + ord('a'))
            key_index += 1
        else:
            plaintext += char
    return plaintext


decrypted_message = vigenere_decrypt(ciphertext, key)
print("Mensaje descifrado:", decrypted_message)
