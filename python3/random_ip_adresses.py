#!/usr/bin/env python3

import random
import os

addresses = []
number_addresses = int(input('Количество адресов:   '))

i = 0
while ( i < number_addresses):
    addr = f'{random.randint(0,255)}.{random.randint(0,255)}.{random.randint(0,255)}.{random.randint(0,255)}'
    addresses.append(addr)
    i = i + 1

print(addresses)

for i in addresses:
    print(i)
    #os.system(f'ping -c 2 {i}')
