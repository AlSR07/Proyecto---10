var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["428c442b-062e-4de4-b72a-8f46fb2a697f","4bfff057-3bc5-47fb-a7ba-2625b8c83a97","ba8ca3ab-33e7-420c-929f-476dad82f40c","f4fb7611-ff53-4731-b279-e32b25e3b78d","3b164e52-d39a-4f3b-8e6f-9efdd4657b9f"],"propsByKey":{"428c442b-062e-4de4-b72a-8f46fb2a697f":{"name":"sun_1","sourceUrl":"assets/api/v1/animation-library/gamelab/knVkn0PWAe33ZGmZASkzXLBnj1H6j5H4/category_icons/sun.png","frameSize":{"x":391,"y":390},"frameCount":1,"looping":true,"frameDelay":2,"version":"knVkn0PWAe33ZGmZASkzXLBnj1H6j5H4","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":390},"rootRelativePath":"assets/api/v1/animation-library/gamelab/knVkn0PWAe33ZGmZASkzXLBnj1H6j5H4/category_icons/sun.png"},"4bfff057-3bc5-47fb-a7ba-2625b8c83a97":{"name":"MIDDAY","sourceUrl":"assets/api/v1/animation-library/gamelab/_kpwQra2QlXpIDLpNDiKcrQxbd6.8BN1/category_stickers/sticker_21.png","frameSize":{"x":250,"y":250},"frameCount":1,"looping":true,"frameDelay":2,"version":"_kpwQra2QlXpIDLpNDiKcrQxbd6.8BN1","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":250,"y":250},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_kpwQra2QlXpIDLpNDiKcrQxbd6.8BN1/category_stickers/sticker_21.png"},"ba8ca3ab-33e7-420c-929f-476dad82f40c":{"name":"afternoon","sourceUrl":"assets/api/v1/animation-library/gamelab/wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg/category_video_games/cloud.png","frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":2,"version":"wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wl6Ri3OYCiAXmoAVo8Gw3t5nYBx9iHyg/category_video_games/cloud.png"},"f4fb7611-ff53-4731-b279-e32b25e3b78d":{"name":"evening","sourceUrl":"assets/api/v1/animation-library/gamelab/SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh/category_icons/cloud.png","frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":2,"version":"SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SFSiRCSKpY8XgbZ8r02qMYlqqmsdNbrh/category_icons/cloud.png"},"3b164e52-d39a-4f3b-8e6f-9efdd4657b9f":{"name":"star","sourceUrl":null,"frameSize":{"x":44,"y":43},"frameCount":1,"looping":true,"frameDelay":12,"version":"3c0mUj_Iku2C0_WeSL_GxiG6jeVKAAuX","loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":43},"rootRelativePath":"assets/3b164e52-d39a-4f3b-8e6f-9efdd4657b9f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState = "serve";

var sun = createSprite(200, 380, 20, 20);
sun.setAnimation("sun_1");
sun.scale = 0.1;
var midday = createSprite(200, 250, 20, 20);
midday.setAnimation("MIDDAY");
midday.scale = 0.2;
var afternoon = createSprite(200, 150, 20, 20);
afternoon.setAnimation("afternoon");
afternoon.scale = 0.2;
var evening = createSprite(200, 80, 20, 20);
evening.setAnimation("evening");
evening.scale = 0.1;
var night = createSprite(200, 10, 380, 20);
night.shapeColor = "black";

midday.velocityX = -8;
evening.velocityX = -8;
afternoon.velocityX = 8;



var deaths = 0;
var sun;
var midday;
var afternoon;
var evening;



createEdgeSprites();
function draw() {
  if (gameState == "serve") {
    background("orange");
    fill("black");
    text("Hola! Bienvenido!", 200, 20);
    text("Está barra negra es el anochecer", 200, 30);
    text("En este juego, deberás ayudar al sol a", 50, 200);
    text("llegar al anochecer.", 50, 215);
    text("Habrán obstaculos, los cuales serán", 200, 300);
    text("el mediodía, la tarde y  el atardecer.", 200, 315);
    text("Da click en enter, para continuar", 10, 380);
    if (keyDown("ENTER")) {
     gameState = "play";
    }
  }
  if (gameState == "play") {
    background("cyan");
    if (keyDown("RIGHT_ARROW")) {
      sun.velocityX = 2;
    }
    if ((keyDown ("LEFT_ARROW"))) {
      sun.velocityX = -2;
    }
    if (keyDown ("DOWN_ARROW")) {
      sun.velocityY = 2;
    }
    if ((keyDown (UP_ARROW))) {
      sun.velocityY = -2;
    }
    text("Deaths:" + deaths, 20, 350);
    if (evening.isTouching(sun) || (midday.isTouching(sun) || afternoon.isTouching(sun))) {
      deaths = deaths + 1;
      sun.x = 200;
      sun.y = 380;
      sun.velocityX = 0;
      sun.velocityY = 0;
    }
    if (sun.isTouching(night)) {
      evening.velocityX = 0;
      afternoon.velocityX = 0;
      midday.velocityX = 0;
      sun.velocityX = 0;
      sun.velocityY = 0;
      gameState = "end";
    }
  }
  if (gameState == "end") {
    if (sun.isTouching(night)) {
      background("black");
      fill("white");
      text("Llegaste al anochecer!!", 150, 200);
      text("Has ganado!!", 160, 215);
      sun.destroy();
      evening.destroy();
      afternoon.destroy();
      midday.destroy();
      for (var i = 15; i < 400; i = i + 40) {
        var stars = createSprite(i, 10, 5, 5);
        var stars2 = createSprite(i, 40, 5, 5);
        var stars3 = createSprite(i, 70, 5, 5);
        var stars4 = createSprite(i, 100, 5, 5);
        var stars5 = createSprite(i, 130, 5, 5);
        var stars6 = createSprite(i, 160, 5, 5);
        var stars7 = createSprite(i, 240, 5, 5);
        var stars8 = createSprite(i, 270, 5, 5);
        var stars9 = createSprite(i, 300, 5, 5);
        var stars10 = createSprite(i, 330, 5, 5);
        var stars11 = createSprite(i, 360, 5, 5);
        var stars12 = createSprite(i, 390, 5, 5);
        stars.setAnimation("star");
        stars.scale = 0.5;
        stars2.setAnimation("star");
        stars2.scale = 0.5;
        stars3.setAnimation("star");
        stars3.scale = 0.5;
        stars4.setAnimation("star");
        stars4.scale = 0.5;
        stars5.setAnimation("star");
        stars5.scale = 0.5;
        stars6.setAnimation("star");
        stars6.scale = 0.5;
        stars7.setAnimation("star");
        stars7.scale = 0.5;
        stars8.setAnimation("star");
        stars8.scale = 0.5;
        stars9.setAnimation("star");
        stars9.scale = 0.5;
        stars10.setAnimation("star");
        stars10.scale = 0.5;
        stars11.setAnimation("star");
        stars11.scale = 0.5;
        stars12.setAnimation("star");
        stars12.scale = 0.5;
      }
      var star11 = createSprite(15, 190, 5, 5);
      var star12 = createSprite(55, 190, 5, 5);
      var star13 = createSprite(95, 190, 5, 5);
      var star14 = createSprite(135, 190, 5, 5);
      var star15 = createSprite(295, 190, 5, 5);
      var star16 = createSprite(335, 190, 5, 5);
      var star17 = createSprite(375, 190, 5, 5);
      var star21 = createSprite(15, 210, 5, 5);
      var star22 = createSprite(55, 210, 5, 5);
      var star23 = createSprite(95, 210, 5, 5);
      var star24 = createSprite(335,210,5,5);
      var star25 = createSprite(375, 210, 5, 5);
      star11.setAnimation("star");
      star11.scale = 0.5;
      star12.setAnimation("star");
      star12.scale = 0.5;
      star13.setAnimation("star");
      star13.scale = 0.5;
      star14.setAnimation("star");
      star14.scale = 0.5;
      star15.setAnimation("star");
      star15.scale = 0.5;
      star16.setAnimation("star");
      star16.scale = 0.5;
      star17.setAnimation("star");
      star17.scale = 0.5;
      star21.setAnimation("star");
      star21.scale = 0.5;
      star22.setAnimation("star");
      star22.scale = 0.5;
      star23.setAnimation("star");
      star23.scale = 0.5;
      star24.setAnimation("star");
      star24.scale = 0.5;
      star25.setAnimation("star");
      star25.scale = 0.5;
    }
  }
  drawSprites();
  sun.bounceOff(edges);
  evening.bounceOff(edges);
  afternoon.bounceOff(edges);
  midday.bounceOff(edges);
}


 
 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
