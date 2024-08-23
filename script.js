const contentArray = [
    {
      id: "1",
      paragraph: "Find Youtube Videos With inspiring Best Man speeches",
      imageUrl: "images/youtube.png",
    },
    {
      id: "2",
      paragraph: "Sudgest a python library to solve a problem",
      imageUrl: "images/code.png",
    },
    {
      id: "3",
      paragraph: "Create an Image and bedtime story",
      imageUrl: "images/night.png",
    },
    {
      id: "4",
      paragraph: "Brainstorm team bonding activities for our work retreat",
      imageUrl: "images/light-bulb.png",
    },
    {
      id: "5",
      paragraph:
        "Find hotels in Phuket for a week in March and suggest a packing list",
      imageUrl: "images/hotel-bed.png",
    },
    {
      id: "6",
      paragraph: "Create a splashy watercolor image",
      imageUrl: "images/drawing.png",
    },
  ];
  
  const extension = document.querySelector(".tokeep");
  const leftbar = document.querySelector(".leftbar");
  const container = document.querySelector(".container");
  const newchatfont = document.querySelector(".newchatfont");
  const tokeep2 = document.querySelector(".tokeep2");
  const heading = document.querySelector(".heading");
  const topheading = document.querySelector(".topheading");
  const input = document.querySelector(".input");
  
  // Use let instead of const for the boolean toggle variable
  // topheading.innerHTML += ` ${Name}`;
  let bool = 0;
  
  extension.addEventListener("click", () => {
    bool++;
  
    if (bool % 2 === 1) {
      leftbar.style.width = "25%";
      container.style.width = "75%";
      newchatfont.style.display = "block";
      tokeep2.style.width = "200px";
      tokeep2.style.border = "2px solid #666667";
      tokeep2.style.borderRadius = "20px";
      newchatfont.style.marginLeft = "20px";
      container.style.paddingLeft = "40px";
    } else {
      leftbar.style.width = "5.6%";
      container.style.width = "94.4%";
      newchatfont.style.display = "none";
      tokeep2.style.width = "45px";
      tokeep2.style.border = "none";
      tokeep2.style.borderRadius = "50%";
      container.style.paddingLeft = "200px";
    }
  });
  
  const card = document.createElement("div");
  card.className = "card"; // Assign the correct class name
  card.style.height = "35vh";
  card.style.display = "flex";
  card.style.gap = "12px";
  
  const existingDiv = container.querySelector(".prompt");
  container.insertBefore(card, existingDiv);
  
  const box = document.createElement("div");
  box.className = "box";
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    shuffleArray(contentArray);
    const itemtodisplay = contentArray.slice(0, 4);
  
    itemtodisplay.forEach((item) => {
      const box = document.createElement("div");
      box.style.height = "200px";
      box.style.width = "200px";
      box.style.backgroundColor = "#1E1F20";
      box.style.borderRadius = "9px";
      box.style.padding = "12px";
      box.style.color = "#DFDFDF";
      box.style.fontSize = "20px";
      box.style.position = "relative";
  
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "#3B4456"; 
      });
  
      box.addEventListener("mouseout", () => {
        box.style.backgroundColor = "#1E1F20"; 
      });
      box.addEventListener('click', () => {
          console.log(item.id);
      });
  
      box.textContent = `${item.paragraph}`;
  
      const imgs = document.createElement('div');
      const imgcontent = document.createElement('img');
      imgcontent.src = `${item.imageUrl}`;
      imgs.style.height = '40px';
      imgs.style.width = '40px';
      imgs.style.backgroundColor = '#131314';
      imgs.style.borderRadius = '50%';
      imgs.style.display = 'flex';
      imgs.style.alignItems = 'center';
      imgs.style.justifyContent = 'center';
      imgs.style.position = 'absolute';
      imgs.style.bottom = '12px';
      imgs.style.right = '12px';
  
      
      if(item.id === "1"){
          imgcontent.style.height = '100%';
          imgcontent.style.width = '100%';
          imgcontent.style.objectFit = 'cover';
          imgcontent.style.borderRadius = '50%';
  
      }else{
          imgcontent.style.height = '25px';
          imgcontent.style.width = '25px';
          imgcontent.style.filter = 'invert(100%)';
      }
  
  
          // Append imgcontent to imgs
          imgs.appendChild(imgcontent);
      
          // Append imgs to box
          box.appendChild(imgs);
          
          // Append box to card or container
          card.appendChild(box);
    });
  });
  input.addEventListener('click', (event)=>{
      event.stopPropagation();
      input.style.backgroundColor = "#282A2C";
  })
  
  document.addEventListener('click', (event)=>{
      if(!input.contains(event.target)){
          input.style.backgroundColor = "#1E1F20";
      }
  })
  const inputValue = ""; 
  
  input.addEventListener('keypress' ,(e)=>{
      if(e.key === 'Enter'){
          const inputValue = input.value; 
          console.log(inputValue); 
          input.value = '';
          card.style.display = 'none';
          heading.style.display = 'none';
      }
  })