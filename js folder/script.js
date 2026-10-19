// DOM element access in Javascript
const backgroundMusic = document.querySelector("#backgroundMusic");
 const boyWalking = document.querySelector("#boyImage");
const duoImage = document.querySelector("#duoImage");
const shopKeeperVoice = document.querySelector("#shopkeeperVoice");
const speechBubble = document.querySelector(".speechBubble");
const boyVoice = document.querySelector("#boyVoice");
const speechBubbleboy = document.querySelector(".speechBubbleboy");
const boyVoiceDuoConversation = document.querySelector("#boyVoiceDuoConversation");
const cartoonVoice = document.querySelector("#boyVoice");
const boyVoiceDuoConversationBubble = document.querySelector(".boyVoiceDuoConversationBubble");
const speechBubbleShopkeeperDuoConversation = document.querySelector( ".speechBubbleShopkeeperDuoConversation");
const speechBubbleShopkeeperDuoConversationVoice = document.querySelector("#speechBubbleShopkeeperDuoConversationVoice");
const gameStart = document.querySelector("#gameStart");

// when click play button go to 1stpage html,connecting index.html with shopEnter html

if (gameStart) {
  gameStart.addEventListener("click", () => {
    window.location.href = "./HTML folder/shopEnter.html";
  });
}
//Background music plays continuously throughout the game.

if (backgroundMusic) {
  backgroundMusic.volume = 0.2;
  backgroundMusic.play();
}

// create objects(boy,shopkeeper etc...)from class oop

class Charachter {
  constructor(name, gender, image, candies, dialogBox, collectedCandy) {
    this.gender = gender;
    this.name = name;
    this.image = image;
    this.candies = candies;
    this.dialogBox = dialogBox;
    this.collectedCandy = collectedCandy;
  }

  //boy voice when saw candies in the shop.

   cartoonVoice() {
    cartoonVoice.play();
  }

  walk() {
    this.walking = true;
   
    setTimeout(() => {
      boyWalking.classList.add("walking");
    }, 1000);

    boyWalking.addEventListener("animationend", (event) => {
      this.walking = false;
      boyWalking.style.opacity = 0;

shopkeeperImage.style.opacity=0;
boyQuizImage.style.opacity=0;
 mathQuestions.style.opacity=0;
   speechBubbleboyQuizImage.style.opacity=0;
    boyThinkingImage.style.opacity=0;
      setTimeout(() => {
        duoImage.style.opacity = 1;
      }, 300);
      setTimeout(() => {
        this.talk();
        shopKeeperVoice.play();
      }, 800);

      shopKeeperVoice.addEventListener("ended", () => {
        this.speechBubbleLittleBoyDuoConversation();
      });
    });
  }

  talk() {
    setTimeout(() => {
      speechBubble.textContent =
        "Welcome to my candy shop, little boy! Which candy would you like to buy?";
        shopkeeperImage.style.opacity=0;
         mathQuestions.style.opacity=0;
           speechBubbleboyQuizImage.style.opacity=0;
         boyQuizImage.style.opacity=0;
      speechBubble.style.opacity = 1;
       boyThinkingImage.style.opacity=0;
    }, 800);

    setTimeout(() => {
      speechBubble.style.opacity = 0;
    }, 6000);
  }

  // speech bubble when boy saw candies in the shop

  speechBubbleLittleBoy() {
    speechBubbleboy.textContent =
      "Wow! So many candies! I want some too!” 🍬🍭";
    speechBubbleboy.style.opacity = 1;
    shopkeeperImage.style.opacity=0;
    boyQuizImage.style.opacity=0;
     mathQuestions.style.opacity=0;
       speechBubbleboyQuizImage.style.opacity=0;
        boyThinkingImage.style.opacity=0;
    this.cartoonVoice();

    setTimeout(() => {
      speechBubbleboy.style.opacity = 0;

      setTimeout(() => {
        this.walk();
      }, 600);
    }, 3000);
  }

  //speech bubbles when boy ask for candy and say don't have money,shopkeeper reply answer math questions.

  speechBubbleLittleBoyDuoConversation() {
    boyVoiceDuoConversationBubble.textContent =
      "I want a candy,but i don't have any money";

    boyVoiceDuoConversationBubble.style.opacity = 1;
    speechBubbleboy.style.opacity = 0;
    shopkeeperImage.style.opacity=0;
    boyQuizImage.style.opacity=0;
    mathQuestions.style.opacity=0;
     speechBubbleboyQuizImage.style.opacity=0;
      boyThinkingImage.style.opacity=0;
    boyVoiceDuoConversation.play();

    boyVoiceDuoConversation.addEventListener("ended", () => {
      this.speechBubbleShopkeeperDuoConversation();
    });
  }

  speechBubbleShopkeeperDuoConversation() {
    speechBubbleShopkeeperDuoConversation.textContent =
      "No problem! Knowledge is money! Answer my math questions to get candy!";

    speechBubbleShopkeeperDuoConversation.style.opacity = 1;
    boyVoiceDuoConversationBubble.style.opacity = 0;
    speechBubbleShopkeeperDuoConversationVoice.play();

    setTimeout(() => {
      speechBubbleShopkeeperDuoConversation.style.opacity = 0;
      duoImage.style.opacity=0;
     setTimeout(() => {
            shopkeeperImage.style.opacity = 1;
            boyThinkingImage.style.opacity=1;
            mathQuestions.style.opacity = 1;


           setTimeout(() => {
             boyThinkingImage.style.opacity=0;
                speechBubbleboyQuizImage.style.opacity = 1;
                 boyQuizImage.style.opacity=1;
                
            }, 4000);

        }, 3500);
        
    }, 7500);
 
  }

  
}

//Creating an object from  class

const boyObj = new Charachter("Ankit", "female");

if (document.querySelector("#boyImage")) {
  boyObj.speechBubbleLittleBoy();
}