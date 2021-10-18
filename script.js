class section{
    constructor(position, element, ratio, moveBegining, moveEnding, pause){
        this.x = position;
        this.ratio = ratio;
        this.element = element;
        this.moveBegining = moveBegining
        this.moveEnding = moveEnding
        this.pause = pause
        // console.log("tweek", this.x, this.ratio, this.moveEnding, this.pause)

    }

    doIMove(d_scroll, distance){
        // if(this.moveBegining < d_scroll && this.moveEnding < this.x){
        //     this.move(distance)
        // }
        this.move(distance)
    }

    move(distance){
        this.x -= distance*this.ratio
        if(this.x < (this.moveEnding - this.pause)){
            this.displayUnbloked()
        }
        else if(this.x < this.moveEnding){
            this.displayBloked()
        }else{
            this.display()
        }
        // console.log("Position actuel :", this.x)
    }

    display(){
        this.element.style = `transform: translateX(${this.x}px); `;
        // console.log("Display")
    }
    displayBloked(){
        this.element.style = `transform: translateX(${this.moveEnding}px); `;
        // console.log("DisplayBloked")
    }
    displayUnbloked(){
        this.element.style = `transform: translateX(${this.x + this.pause}px); `;
        // console.log("DisplayUnbloked")
    }
}

// Initialisation Variables globales
let idGenerated = 0;
let skillStart = 1000;
let numberOfElement = 0;
let numberOfTitle =0;
let pauseTotal = []
let sizeTotal = 0
let sectionWidth = document.getElementById('section-1').offsetWidth
let minSpace = 50;
if(window.innerWidth<=360){
    minSpace=10;
}
let spaceBetweenSection = Math.max((window.innerWidth - (2*sectionWidth))/3, minSpace)
let dataBefore = -spaceBetweenSection/2
document.documentElement.style.setProperty('--w', dataBefore + 'px')
let allClass=[]
// console.log("bodysize =", 9*(150+sectionWidth+(2*spaceBetweenSection))+"px;")

btnContact=document.getElementById("btn-contact")
btnContact.addEventListener("click", function(){
    window.scrollTo(0, 100000)
})

if(window.innerWidth > 900){
    allClass.push(new section(initSectionPosition(sectionWidth, 0, 200), document.getElementById('section-1'), 1, 0, initSectionPause(true), 200));
    allClass.push(new section(initSectionPosition(sectionWidth, 0, 200), document.getElementById('section-2'), 1, 0, initSectionPause(false), 200)); //- la largeur des éléments avants on sait pas pourquoi
    allClass.push(new section(initSectionPosition(), document.getElementById('section-3'), 1, 0, initSectionPause(true), 600));
    allClass.push(new section(initSectionPosition(), document.getElementById('section-4'), 1, 0, initSectionPause(false), 600));
    allClass.push(new section(initSectionPosition(), document.getElementById('section-5'), 1, 0, initSectionPause(true), 600));
    allClass.push(new section(initSectionPosition(), document.getElementById('section-6'), 1, 0, initSectionPause(false), 600));
    allClass.push(new section(initSectionPosition(), document.getElementById('section-7'), 1, 0, initSectionPause(true), 600));
    allClass.push(new section(initSectionPosition(), document.getElementById('section-8'), 1, 0, initSectionPause(false), 600));
    allClass.push(new section(initSectionPosition(), document.getElementById('section-9'), 1, 0, initSectionPause(true), 1000000));

    // console.log("last one", allClass[8].x, allClass[8].moveEnding, allClass[8].x + Math.abs(allClass[8].moveEnding)+ window.innerWidth )
    document.body.style = "height: " + (allClass[8].x + Math.abs(allClass[8].moveEnding)+ window.innerWidth+600) + "px;"

    allClass.push(new section(skillStartPosition(), document.getElementById('skill-1'), 2, 0, 0, 100000000));
    allClass.push(new section(skillStartPosition(), document.getElementById('skill-2'), 2, 0, 0, 100000000));
    allClass.push(new section(skillStartPosition(), document.getElementById('skill-3'), 2, 0, 0, 100000000));
    allClass.push(new section(skillStartPosition(), document.getElementById('skill-4'), 2, 0, 0, 100000000));
    allClass.push(new section(skillStartPosition(), document.getElementById('skill-5'), 2, 0, 0, 100000000));
    allClass.push(new section(skillStartPosition(), document.getElementById('skill-6'), 2, 0, 0, 100000000));
    allClass.push(new section(skillStartPosition(), document.getElementById('skill-7'), 2, 0, 0, 100000000));
    allClass.push(new section(skillStartPosition(), document.getElementById('skill-8'), 2, 0, 0, 100000000));
    allClass.push(new section(skillStartPosition(), document.getElementById('skill-9'), 2, 0, 0, 100000000));
    allClass.push(new section(skillStartPosition(), document.getElementById('skill-10'), 2, 0, 0, 100000000));
    allClass.push(new section(skillStartPosition(), document.getElementById('skill-11'), 2, 0, 0, 100000000));

    // allClass.push(new section((window.innerWidth - 1000)/3, document.getElementById("title-1"), 1, 0, (window.innerWidth - 1000)/3, 200));
    // console.log("Bonjour", titleComeWith(0), titleLeaveWith(0)[0], titleLeaveWith(0)[1])
    allClass.push(new section(titleComeWith(0), document.getElementById("title-1"), 1, 0, titleLeaveWith(0)[0], 200));
    a = allClass.length-1
    // console.log("Bonjour", titleComeWith(a), titleLeaveWith(a)[0], titleLeaveWith(a)[1])
    allClass.push(new section(titleComeWith(2), document.getElementById("title-2"), 1, 0, titleLeaveWith(2)[0], 600));
    allClass.push(new section(titleComeWith(4), document.getElementById("title-3"), 1, 0, titleLeaveWith(6)[0], 600));
    allClass.push(new section(titleComeWith(8), document.getElementById("title-4"), 1, 0, titleLeaveWith(8)[0], 100000));
    // allClass.push(new section(4*((window.innerWidth - 1000)/3)+600, document.getElementById("title-2"), 1, 0, ((window.innerWidth - 1000)/3)-500, 600));
    // allClass.push(new section(8*((window.innerWidth - 1000)/3)+1200, document.getElementById("title-3"), 1, 0, ((window.innerWidth - 1000)/3)-1000, 2600));

    cnt = 0
    // console.log("window.innerWidth = ", window.innerWidth)
    // console.log("space = ", spaceBetweenSection)
    for(el of allClass){
        cnt+=1
        // console.log(cnt, el.element.offsetLeft)
    }

    let before = 0;
    let distanceMove;

    window.addEventListener('scroll', function(){

        d_scroll = window.scrollY
        distanceMove = d_scroll - before
        before = d_scroll

        for (elmt of allClass){
            elmt.doIMove(d_scroll, distanceMove)
        }
        for(i=9; i<allClass.length-4;i++){
            allClass[i].element.style.cssText += `width: ${((window.innerWidth/12) -10)/2}px;`
            allClass[i].element.style.cssText += `margin-right: ${((window.innerWidth/12) -30)/2}px;`
        }

        cubeList = document.querySelectorAll(".cube")
        for(let i=0; i<cubeList.length; i++){
            left = allClass[20+i].element.getBoundingClientRect().left
            if(left > -100 && left < window.innerWidth-300){
                cubeList[i].className = "cube cube-active"
                cubeList[i].children[0].className = "cube-label-active cube-label"
                console.log("La position du", i, "est :", allClass[22].element.getBoundingClientRect().left)
            }else{
                cubeList[i].className = "cube"
                cubeList[i].children[0].className = "cube-label"
            }
        }
        
    })

    let btnMenu = document.getElementsByClassName('cube')
    for (btn of btnMenu){

        btn.addEventListener("click", function(){
            window.scrollTo(0, this.getAttribute('btnid'))
            // console.log(this.getAttribute('btnid'))
        })

    }
    window.onload = function(){
        window.scrollTo(0,100)

    }
}




function initSectionPosition(size=sectionWidth, bonusSpaceBefore=0, pause=600){
    position = bonusSpaceBefore + ((Math.floor(numberOfElement/2) + numberOfElement+1) * (spaceBetweenSection))
    position += sum(pauseTotal)
    if(numberOfElement%2 != 0){
        pauseTotal.push(pause);
        // console.log("pauseTotal = ", sum(pauseTotal))
    }
    // console.log("position = ", position)
    // console.log("pause", pause, "size", size)
    sizeTotal += size;
    numberOfElement+=1;
    return position
}

function initSectionPause(isLeft){
    multiplicateur = 2
    nb = numberOfElement-1
    if(isLeft){
        multiplicateur = 1
    }
    // console.log("multiplicateur", multiplicateur)
    if(nb%2 == 0){
        // console.log("yoyoyoyo", spaceBetweenSection, multiplicateur, -nb*500)
        return spaceBetweenSection * multiplicateur - nb*sectionWidth
    }else{
        // console.log("yayayaya", spaceBetweenSection, multiplicateur, -nb*500)
        return  spaceBetweenSection * multiplicateur - (nb-1)*sectionWidth
    }
}

function titleComeWith(idSection){
    numberOfTitle++
    console.log("titleComeWith", numberOfTitle, idSection, sectionWidth*(idSection-(numberOfTitle-1)))
    return allClass[idSection].x + sectionWidth*(idSection-(numberOfTitle-1));
}
function titleLeaveWith(idSection){
    console.log("titleLeaveWith", numberOfTitle, idSection, sectionWidth*(idSection-(numberOfTitle-2)))
    return [allClass[idSection].moveEnding + sectionWidth*(idSection-(numberOfTitle-1)), allClass[idSection].pause];
}
// includeHTML();
// setTimeout(function(){ console.log(allClass[2].element.children); }, 2000);
// console.log(allClass[2].element)


function idGenerator(){
    idGenerated ++;
    return 'id-' + idGenerated
}


function skillStartPosition(){
    skillStart += document.body.scrollHeight/7;
    return skillStart
}

function sum(array){
    total = 0
    for (value of array){
        total += value;
    }
    return total
}


// function createSectionElement(){
//     let sectionElement = document.createElement('div')
//     sectionElement.id = idGenerator()
//     sectionElement.className = "article"
//     document.getElementById("section-container").appendChild(sectionElement)
//     return sectionElement
// }

// function createSkillElement(srcImage){
//     let skillElement = document.createElement('img')
//     skillElement.id = idGenerator()
//     skillElement.className = "skill"
//     skillElement.src = srcImage
//     skillElement.alt = "Logo "
//     document.getElementById("skills").appendChild(skillElement)
//     return skillElement
// }

// function createTitleElement(name){
//     let titleElement = document.createElement('div')
//     titleElement.id = idGenerator();
//     titleElement.innerText = name
//     titleElement.className = "title-section"
//     document.getElementById("title-container").appendChild(titleElement)
//     return titleElement
// }



// function includeHTML() {
//     var z, i, elmnt, file, xhttp;
//     /*loop through a collection of all HTML elements:*/
//     z = document.getElementsByTagName("*");
//     for (i = 0; i < z.length; i++) {
//       elmnt = z[i];
//       /*search for elements with a certain atrribute:*/
//       file = elmnt.getAttribute("w3-include-html");
//       if (file) {
//         /*make an HTTP request using the attribute value as the file name:*/
//         xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4) {
//             if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//             if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//             /*remove the attribute, and call this function once more:*/
//             elmnt.removeAttribute("w3-include-html");
//             includeHTML();
//           }
//         }
//         xhttp.open("GET", file, true);
//         xhttp.send();
//         /*exit the function:*/
//         return;
//       }
//     }
//   };


