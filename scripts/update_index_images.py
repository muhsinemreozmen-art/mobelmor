import re

content = open('index.html', encoding='utf-8').read()

# Replace p1_1 with p1_2 where referring to the Gold Takım
new_content = content.replace('assets/minegolden_p1_1.webp', 'assets/minegolden_p1_2.webp')
new_content = new_content.replace('assets/minegolden_p3_1.webp', 'assets/minegolden_p3_2.webp')
new_content = new_content.replace('assets/minegolden_p8_1.webp', 'assets/minegolden_p8_3.webp')

open('index.html', 'w', encoding='utf-8').write(new_content)
print("Updated index.html showcase set image links")
