import os 

for i in os.listdir("assets/gallery"):
    if (i=="test.py"):
        continue
    data="""<div id="ph">
       <a href="assets/gallery/{}" target="_blank"><img class="gallery-img" data-src="assets/gallery/{}" alt="Gallery" srcset=""></a>
      </div>""".format(i,i)
    
    print(data)






""" <div id="ph">
       <a href="assets/gallery/CANR0018.JPG" target="_blank"><img src="assets/gallery/CANR0018.JPG" alt="" srcset=""></a>
      </div>"""