import base64
import sys
import cv2
import json
from dominantColor import findDominantColor
img=sys.argv[1]
img_data=(img).split(",",1)
with open("./shirt_images/shirtImage.png", "wb") as fh:
  fh.write(base64.urlsafe_b64decode(img_data[1]))

path = r"./shirt_images/shirtImage.png"
img_rgb = cv2.imread(path, 1)
x,y,q=img_rgb.shape

rn,gn,bn=0,0,0
i=0
j=0
if(x<y):n=x
else:n=y
while (i<x)and(j<y):
    r,g,b = (img_rgb[i, j])
    rn,gn,bn=r+rn,g+gn,b+bn
    i+=1
    j+=1

#claculating the average of r,g,b values 
rn=int(rn/n)
gn=int(gn/n)
bn=int(bn/n)

#calculating the complement of r,g,b values
rc=255-rn
gc=255-gn
bc=255-bn

def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % rgb
sHex=rgb_to_hex((rn, gn, bn))
scHex=rgb_to_hex((rc, gc, bc))

(color_hex, (min_extreme, comp_hex, max_extreme)) = findDominantColor(img_rgb)

output_data = {"shirt": color_hex, "pant": comp_hex, "min_extreme": min_extreme, "max_extreme" : max_extreme}
output_json = json.dumps(output_data)

print(output_json)

