import glob

files = glob.glob("assets/*p1*") + glob.glob("assets/*gold*")
for f in files:
    print(f)
