#!/usr/bin/env python3

import sys
from datetime import datetime

def measure_speed():
    start = datetime.now()
    text = input('Текст для измерения скорости набора:    \n')
    end = datetime.now()
    result = end - start
    result = result.seconds
    print('')
    print(f'Длина введённого текста:    {len(text)} символов')
    print(f'Время, потраченное на ввод текста:    {result} сек')
    print(f'Среднее время, требуемое для ввода одного символа:    {result/len(text)} сек')

def helper():
    print("Параметры:\n'-h' - эта справка\n")

try:
    if len(sys.argv) == 1:
        measure_speed()
    else:
        if '-h' in sys.argv:
            helper()
except (KeyboardInterrupt, EOFError):
    print('\nПрервано!')
    exit()
