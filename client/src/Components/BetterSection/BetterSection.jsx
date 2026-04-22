import React from 'react';
import FourthSection from '../FourthSection/FourthSection';

const BetterSection = () => {
  // Helper to render columns of reasons
  const renderReasonColumn = (reasons) => (
    <div className="flex flex-col space-y-3">
      {reasons.map((item, index) => (
        <p key={index} className="text-white font-bold text-[14px] leading-tight">
          {item}
        </p>
      ))}
    </div>
  );

  return (
    <>
    <FourthSection />
    <div className="w-full bg-white pt-4 px-4 md:pt-6 md:px-6 lg:pt-8 lg:px-10 pb-10">
      {/* Import Gloria Hallelujah Font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap');
          .font-gloria { font-family: 'Gloria Hallelujah', cursive; }
        `}
      </style>

      {/* Main Teal Container */}
      <section className="relative w-full bg-[#00A3B1] rounded-[40px] md:rounded-[50px] overflow-hidden px-8 md:px-16 lg:px-20 py-16 shadow-sm">
        
        {/* --- MAIN HEADING (Reasons 1-25) --- */}
        <div className="mb-16">
          <h2 className="text-white font-black uppercase text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1] mb-12 max-w-4xl">
            YOOK IS 100 X <br /> BETTER:
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-3">
            {renderReasonColumn([
              "1. oat drinks are plant-based, making it suitable for vegans.",
              "2. it contains fewer calories than cow's milk.",
              "3. oat drinks contain healthy polyunsaturates.",
              "4. it's easy to digest and suitable for people with sensitive stomachs.",
              "5. our oat drinks contain only natural sugar from oats, we don't add white sugar or glucose to our drinks.",
              "6. it contains fibre which is oh so good for our digestive systems.",
              "7. it's lactose-free, making it suitable for those who are lactose-intolerant.",
              "8. intolerance to oat drinks is very rare.",
              "9. its taste and texture make it ideal for use in coffee.",
              "10. it's perfect for use in making desserts.",
              "11. it's perfect on your breakfast cereal.",
              "12. it makes smoothies creamy and delicious.",
              "13. it's an ideal ingredient in hot chocolate."
            ])}
            {renderReasonColumn([
              "14. it makes a perfect addition to protein drinks.",
              "15. it can help alleviate hunger pangs.",
              "16. who'd want to drink anything else?",
              "17. oat drinks became the most popular plant-based drinks in Europe in 2020.",
              "18. it can be used in hair masks and face masks.",
              "19. you can use it in lots of different recipes.",
              "20. it can be used when making porridge.",
              "21. YOOK is better because of its creamy taste.",
              "22. whenever you drink it, everyone else wants a sip.",
              "23. oats aren't demanding when it comes to soil and make good use of the nutrients in it.",
              "24. if it was a DJ, it would only ever play the latest hits while everyone else played lift music.",
              "25. it can be chilled and enjoyed as a drink in its own right."
            ])}
          </div>
        </div>

        {/* --- INTERMEDIATE HEADING (Reasons 26-54) --- */}
        <div className="mb-20">
          <h2 className="font-gloria text-white font-bold text-[34px] leading-tight mb-10 max-w-3xl">
            26. Yook is better because Yo ok!
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-3">
            {renderReasonColumn([
              "27. YOOK is better because it helps keep the body in balance.",
              "28. it makes a great post-workout drink.",
              "29. it's ideally suited to healthy lifestyles.",
              "30. it's a choice that helps reduce our environmental footprint.",
              "31. because oat drinks are truly delicious!",
              "32. because while aliens might abduct your cows, they'll never abduct your YOOK.",
              "33. because if you've been butting heads with someone all day, you can console yourself with a YOOK.",
              "34. it makes for an ideal ecological sedative when you've just heard about the latest bit of greenwashing.",
              "35. it promotes ecological thinking at other levels as well.",
              "36. if you drink it, you'll always be able to look a cow in the eye.",
              "37. it has as much respect for the environment as you had for your posters of your favourite band when you were a teenager.",
              "38. if it was a character, it would regularly look inside itself and nurture its emotional health.",
              "39. because our oat fields are covered in snow in winter.",
              "40. in the evolutionary movement of the things we drink it is very much future-facing."
            ])}
            {renderReasonColumn([
              "41. some drinks can only make you feel better, but this one can make the whole world a better place!",
              "42. because how could anything that tastes this good possibly be bad?",
              "43 YOOK is better because it just is.",
              "44. because you assumed these 100 reasons were dashed off without any thought, but now you're amazed to find they're actually 100% right.",
              "45. even if you only buy it because it's on special, you'll be surprised at how good it is.",
              "46. you've never liked oats before, but now you do.",
              "47. because the Barista version froths up a treat.",
              "48. because diehards see red whenever oat drinks are mentioned, and YOOK is available in a red carton with added vitamins.",
              "49. it's made in a place where oats grow best.",
              "50. because if you believe things really can be better, then you don't need us to show you how.",
              "51. because lots of people around the world are already saying so.",
              "52. you can still enjoy it even if the power goes off.",
              "53. it's so good you'll want to tell everyone about it straight away!",
              "54. it's a source of inspiration that knows no bounds."
            ])}
          </div>
        </div>

        {/* --- INTERMEDIATE HEADING (Reasons 55-83) --- */}
        <div className="mb-20">
          <h2 className="font-gloria text-white text-[34px] font-bold leading-tight mb-10 max-w-4xl">
            55. Yook is better because you yourself want to be 100 x better!
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-3">
            {renderReasonColumn([
              "56. YOOK is better because it's a morning hug in a mug!",
              "57. because you can always take half a litre with you when you set off on your adventures.",
              "58. YOOK is better because you're worth it.",
              "59. it might be okay for your pets as well.",
              "60. it's the stand-up comedian of the drinks world while everyone else is telling dad jokes.",
              "61. because sipping on a coffee with our Barista version in it you'll never feel overwhelmed by the number of e-mails in your inbox.",
              "62. if it was a magician, it would turn every morning into a magic moment while everyone else was still trying to pull rabbits out of their hats.",
              "63. YOOK is better because cats would buy it.",
              "64. It's the wake-up you deserve of a morning.",
              "65. because that friend of yours who's a health fanatic recommends it to you as well.",
              "66. it's like a fashionista who always dresses to impress while everyone else is still in their PJs.",
              "67. we know that chocolate bar is calling out to you, but our YOOK is calling louder."
            ])}
            {renderReasonColumn([
              "68. YOOK is better because who's still drinking energy drinks?",
              "69. YOOK is better because have you heard the stories our cow has to tell?",
              "70. YOOK is better because rhinos have said even they like it.",
              "71. its ecological footprint is smaller than that of other plant-based drinks.",
              "72. it takes one sixth as much water to make it as almond drinks.",
              "73. making it uses 80% less land than ordinary milk does.",
              "74. we use 60% less energy to make it than goes into making ordinary milk.",
              "75. making it only generates 20% of the greenhouse gases than ordinary milk production does.",
              "76. YOOK is better because who doesn't want to be progressive?",
              "77. we won't settle for anything but the best.",
              "78. YOOK is better because it's a happy person's drink.",
              "79. because new really is better than old.",
              "80. because if you don't look after yourself, who else will?",
              "81. because our fans have good taste and know what they’re talking about.",
              "82. YOOK is better because it's the new black.",
              "83. because everyone has their favourite."
            ])}
          </div>
        </div>

        {/* --- INTERMEDIATE HEADING (Reasons 84-100) --- */}
        <div className="mb-20">
          <h2 className="font-gloria font-bold text-white text-[34px] leading-tight mb-10 max-w-4xl">
            84. Yook is better because if you´ve read as far as reason no. 84 then you´ve clearly got staying power, which is what Yook gives you.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-3">
            {renderReasonColumn([
              "85. because it includes an invisible component that keeps the whole world together.",
              "86. because someone had made the decision for you and all that's left for you to do is enjoy it!",
              "87. because you can drink it, quite literally, to your heart's content.",
              "88. it will teach you random facts. (Did you know that sea turtles can live to be more than 100?)",
              "89. YOOK is better because it's always in your thoughts. (You just said ‘YOOK’ to your other half without realising it, didn't you?)",
              "90. YOOK is better because whenever I forget my password I just enter YOOK123 and voila!",
              "91. YOOK is better because it's a perfect name for a pet.",
              "92. because it will help broaden your perspective and open up the world to you."
            ])}
            {renderReasonColumn([
              "93. because its taste is contagious, like the most beneficent virus the world has ever seen.",
              "94. it rhymes with FORK, which is something you can use to eat lots of delicious things you've made using YOOK.",
              "95. because each and every one of these reasons was penned by a different person, which is to say by 100 people in total.",
              "96. because when you switch on your coffee machine that's what it sounds like it's saying.",
              "97. because I can now run 100 x faster.",
              "98. because without it my life is just “K.”",
              "99. YOOK is better because every time I go to a café the barista asks, “Do you want YOOK in that?”",
              "100. YOOK is better because a good mood doesn't come for free."
            ])}
          </div>
        </div>

        {/* --- SECTION 101: THE COW & FORM --- */}
        <div className="relative mt-32 pt-10 border-t border-white/20">
          <div className="max-w-4xl relative z-20">
            <h1 className="text-white font-black text-[60px] md:text-[100px] leading-none mb-4">101.</h1>
            <h2 className="text-white font-black text-[28px] md:text-[36px] uppercase leading-tight max-w-2xl">
              YOOK IS BETTER BECAUSE READING THIS LIST, YOU'RE ITCHING TO ADD SOMETHING TO IT YOURSELF
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-end justify-between mt-10 gap-10">
            {/* Left: Cow Image and Leaf Decoration */}
            <div className="relative w-full h-auto max-w-2xl lg:max-w-4xl">
  <img 
    src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776772515/Screenshot_2026-04-21_172326-removebg-preview_r9ngqi.png" 
    alt="Yook Cow" 
    
    className="w-full top-18 md:w-[600px] lg:w-[800px] object-contain relative z-10" 
  />
  <img 
    src="https://res.cloudinary.com/ds1dt3qub/image/upload/v1776595937/Screenshot_2026-04-19_161529_qrmyrh-removebg-preview_ciogcv.png" 
    alt="leaf decoration" 
    className="absolute bottom-0 left-0 w-32 md:w-48 z-20"
  />
</div>

            {/* Right: Input Form */}
            <div className="w-full max-w-md relative z-20 mb-10">
              <div className="bg-white rounded-[30px] p-6 shadow-lg min-h-[160px]">
                <label className="text-[#4399AC] font-black text-xs md:text-sm uppercase block mb-2">
                  YOOK IS BETTER BECAUSE:*
                </label>
                <textarea 
                  className="w-full border-none outline-none resize-none text-gray-700 font-medium h-24" 
                  placeholder=""
                ></textarea>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-[#008A96] hover:bg-[#007681] text-white font-black px-12 py-3 rounded-2xl text-xl transition-all shadow-md uppercase">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
    </>
  );
};

export default BetterSection;