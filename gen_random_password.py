#!/usr/bin/env python3

import random

english_alphabet = ['a','b','c','d','e',
                    'f','g','h','i','j',
                    'k','l','m','n','o',
                    'p','q','r','s','t',
                    'u','v','w','x','y','z']

random_password = ''
number_char_in_password = int(input('How lenght of password?   '))

lenght_password = 0
while ( len(random_password) != number_char_in_password ):
    for i in range(0, number_char_in_password):
        random_password = random_password + english_alphabet[random.randint(0,len(english_alphabet))]

print(random_password)
