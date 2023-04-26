const reviews =["<div class='slide'><h2 class='' style='max-width: 100%;'>'I had my first adjustment and was amazed at how the cupping really helped ease the straining in my neck. THANK YOU!'</h2><div class = '' style='margin-top: 1%;max-width: 100%;'><p class='' style='white-space:pre-wrap;'>— B. Austby</p></div></div>", 
"<div class='slide'><h2 class='' style='max-width: 100%;'>'What a great experience. This was my first appointment with a chiropractor in my life. She was able to fit me in quickly and got me some relief! Very personable and friendly! 10/10 would recommend!'</h2><div class='' style='margin-top: 1%; max-width: 100%;'><p class='' style='white-space:pre-wrap;'> — D. Cahue </p></div></div>",
"<div class='slide'><h2 class='' style='max-width: 100%;'>'Payton is professional, knowledgeable, and so kind! Highly recommend her for your chiropractic needs...!!'</h2><div class=''style='margin-top: 1%; max-width: 100%;'><p class='' style='white-space:pre-wrap;'d> — B. Kortum</p></div></div>",
"<div class='slide'><h2 class='' style='max-width: 100%;'>'Payton was amazing! I highly recommend going to Payton! She went step by step explaining what she was doing and she makes you feel comfortable through the whole thing! The cupping is my favorite part! 😊'</h2><div class=''style='margin-top: 1%;max-width: 100%;'><p class='' style='white-space:pre-wrap;'> -A. Chavez</p></div></div>","<div class='slide'><h2 class='' style='max-width: 100%;'>'Payton is a God Send!!!!!  I feel so much better after one treatment!!!!  I am so glad you you brought your practice home!!!'</h2> <div class=''style='margin-top: 1%; max-width: 100%;'><p class='' style='white-space:pre-wrap;'> -L. Franz </p></div></div>","<div class='slide'><h2 class='' style='max-width: 100%;'>'Amazing how just one visit helped my pain &amp; discomfort!! Highly recommended!!' </h2><div class='' style='margin-top: 1%; max-width: 100%;'><p class='' style='white-space:pre-wrap;'> -D. Kaul</p></div></div>",
"<div class='slide'><h2 class='' style='max-width: 100%;'>'HIGHLY recommend Payton. Not only is she personable and professional, you can tell she really cares about her patients. She got me in quickly after an incident and fixed me right up. It wasn’t just the treatment, though. Payton gave me specific instructions and parameters to follow and didn’t make me feel fearful of movement. In fact, as an athlete herself, she encouraged movement. She’s so smart and has lots of tools and treatments available and I am so grateful to have her around. She’s going to help me keep moving well for years and years to come.'</h2><div class='' style='margin-top: 1%; max-width: 100%;'> <p class='' style='white-space:pre-wrap;'> -S. Aldinger</p></div></div>",
 "<div class='slide'><h2 class='' style='max-width: 100%;'>'Went to Peyton for the first time this morning, her and her staff were friendly. She was quick, prices were good, and I've never had a chiropractor that helped this much and gave me immediate relief. 10/10 recommend'</h2><div class='' style='margin-top: 1%;max-width: 100%;'><p class='' style='white-space:pre-wrap;'> -C. Negaard</p></div></div>",
"<div class='slide'><h2 class='' style='max-width: 100%;'>'I went to Payton in a lot of pain from what turned out to be a rib out of place. I had also recently had minor surgery. She was extremely careful, used heat to make sure I was completely relaxed when we started, and adjusted me very gently yet very thoroughly. She also gave me detailed instructions for how to best deal with several days of travel immediately following the visit.  Thanks to her, I was able to enjoy the next several days of activities rather than be miserable. Payton has a blend of professional knowledge and skill and a great personality to make you feel comfortable. I would recommend W Bar Chiropractic to anyone.'</h2><div class='' style='margin-top: 1%; max-width: 100%;'><p class='' style='white-space:pre-wrap;'> -A.Stenson</p></div></div>"]

const body= document.getElementsByTagName("body")[0];

const carousel= document.querySelector("#carousel");

const slidesContainer= carousel.querySelector("#slidesContainer")

const buttonPrevious= carousel.querySelector("#previous");

const buttonNext= carousel.querySelector("#next");

buttonPrevious.addEventListener("click",handlePrevious);

buttonNext.addEventListener("click",handleNext);

function loadSlides(){
    document.getElementsByClassName("slides")[0].innerHTML=`${reviews.join("")}`;
    slidesContainer.classList.remove("moveNext")
    slidesContainer.classList.remove("movePrev")

}

function handlePrevious(){
    let r=reviews.pop()
    reviews.unshift(r)
    slidesContainer.classList.add("movePrev")
    setTimeout(loadSlides,200)
}

function handleNext(){
    let r=reviews.shift()
    reviews.push(r)
    slidesContainer.classList.add("moveNext")
    setTimeout(loadSlides,200)
}

function toggle(){
    console.log('test')
    document.getElementsByTagName("body")[0].classList.toggle("open")
}









loadSlides();


